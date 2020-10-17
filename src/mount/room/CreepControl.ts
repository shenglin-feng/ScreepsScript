import { DEFAULT_FLAG_NAME } from "setting";
import RoomConsole from "./RoomConsole";
import { creepApi } from "modules/creepController";
import { releaseCreep } from "modules/autoPlanning/planCreep";

export default class CreepControl extends RoomConsole {
  /**
   * 给本房间发布或重新规划指定的 creep 角色
   * @param role 要发布的 creep 角色
   */
  public releaseCreep(role: BaseRoleConstant): ScreepsReturnCode {
    return releaseCreep(this, role);
  }

  /**
   * 发布外矿角色组
   *
   * @param remoteRoomName 要发布 creep 的外矿房间
   */
  public addRemoteCreepGroup(remoteRoomName: string): void {
    const sourceFlagsName = [`${remoteRoomName} source0`, `${remoteRoomName} source1`];

    // 添加对应数量的外矿采集者
    sourceFlagsName.forEach((flagName, index) => {
      if (!(flagName in Game.flags)) return;

      creepApi.add(
        `${remoteRoomName} remoteHarvester${index}`,
        "remoteHarvester",
        {
          sourceFlagName: flagName,
          spawnRoom: this.name,
          targetId: this.memory.remote[remoteRoomName].targetId
        },
        this.name
      );
    });

    this.addRemoteReserver(remoteRoomName);
  }

  /**
   * 发布房间预定者
   *
   * @param remoteRoomName 要预定的外矿房间名
   * @param single 为 false 时将允许为一个房间发布多个预定者，为 true 时可以执行自动发布
   */
  public addRemoteReserver(remoteRoomName: string, single = true): void {
    // 添加外矿预定者
    const reserverName = `${remoteRoomName} reserver${single ? "" : Game.time}`;
    if (!creepApi.has(reserverName))
      creepApi.add(
        reserverName,
        "reserver",
        {
          targetRoomName: remoteRoomName
        },
        this.name
      );
  }

  /**
   * 孵化掠夺者
   *
   * @param sourceFlagName 要搜刮的建筑上插好的旗帜名
   * @param targetStructureId 要把资源存放到的建筑 id
   */
  public spawnReiver(sourceFlagName = "", targetStructureId = ""): string {
    if (!targetStructureId && !this.terminal) return `[${this.name}] 发布失败，请填写要存放到的建筑 id`;
    const reiverName = `${this.name} reiver ${Game.time}`;
    creepApi.add(
      reiverName,
      "reiver",
      {
        flagName: sourceFlagName || DEFAULT_FLAG_NAME.REIVER,
        targetId: targetStructureId || this.terminal.id
      },
      this.name
    );

    return `[${this.name}] 掠夺者 ${reiverName} 已发布, 目标旗帜名称 ${
      sourceFlagName || DEFAULT_FLAG_NAME.REIVER
    }, 将搬运至 ${targetStructureId ? targetStructureId : this.name + " Terminal"}`;
  }
}
