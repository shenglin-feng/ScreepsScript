// 从反应目标产物获取其底物的对应表
export const reactionSource: IReactionSource = {
  // 三级化合物
  [RESOURCE_CATALYZED_GHODIUM_ACID]: [RESOURCE_GHODIUM_ACID, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_GHODIUM_ALKALIDE]: [RESOURCE_GHODIUM_ALKALIDE, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_KEANIUM_ACID]: [RESOURCE_KEANIUM_ACID, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_KEANIUM_ALKALIDE]: [RESOURCE_KEANIUM_ALKALIDE, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_LEMERGIUM_ACID]: [RESOURCE_LEMERGIUM_ACID, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE]: [RESOURCE_LEMERGIUM_ALKALIDE, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_UTRIUM_ACID]: [RESOURCE_UTRIUM_ACID, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_UTRIUM_ALKALIDE]: [RESOURCE_UTRIUM_ALKALIDE, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_ZYNTHIUM_ACID]: [RESOURCE_ZYNTHIUM_ACID, RESOURCE_CATALYST],
  [RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE]: [RESOURCE_ZYNTHIUM_ALKALIDE, RESOURCE_CATALYST],
  // 二级化合物
  [RESOURCE_GHODIUM_ACID]: [RESOURCE_GHODIUM_HYDRIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_GHODIUM_ALKALIDE]: [RESOURCE_GHODIUM_OXIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_KEANIUM_ACID]: [RESOURCE_KEANIUM_HYDRIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_KEANIUM_ALKALIDE]: [RESOURCE_KEANIUM_OXIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_LEMERGIUM_ACID]: [RESOURCE_LEMERGIUM_HYDRIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_LEMERGIUM_ALKALIDE]: [RESOURCE_LEMERGIUM_OXIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_UTRIUM_ACID]: [RESOURCE_UTRIUM_HYDRIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_UTRIUM_ALKALIDE]: [RESOURCE_UTRIUM_OXIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_ZYNTHIUM_ACID]: [RESOURCE_ZYNTHIUM_HYDRIDE, RESOURCE_HYDROXIDE],
  [RESOURCE_ZYNTHIUM_ALKALIDE]: [RESOURCE_ZYNTHIUM_OXIDE, RESOURCE_HYDROXIDE],
  // 一级化合物
  [RESOURCE_GHODIUM_HYDRIDE]: [RESOURCE_GHODIUM, RESOURCE_HYDROGEN],
  [RESOURCE_GHODIUM_OXIDE]: [RESOURCE_GHODIUM, RESOURCE_OXYGEN],
  [RESOURCE_KEANIUM_HYDRIDE]: [RESOURCE_KEANIUM, RESOURCE_HYDROGEN],
  [RESOURCE_KEANIUM_OXIDE]: [RESOURCE_KEANIUM, RESOURCE_OXYGEN],
  [RESOURCE_LEMERGIUM_HYDRIDE]: [RESOURCE_LEMERGIUM, RESOURCE_HYDROGEN],
  [RESOURCE_LEMERGIUM_OXIDE]: [RESOURCE_LEMERGIUM, RESOURCE_OXYGEN],
  [RESOURCE_UTRIUM_HYDRIDE]: [RESOURCE_UTRIUM, RESOURCE_HYDROGEN],
  [RESOURCE_UTRIUM_OXIDE]: [RESOURCE_UTRIUM, RESOURCE_OXYGEN],
  [RESOURCE_ZYNTHIUM_HYDRIDE]: [RESOURCE_ZYNTHIUM, RESOURCE_HYDROGEN],
  [RESOURCE_ZYNTHIUM_OXIDE]: [RESOURCE_ZYNTHIUM, RESOURCE_OXYGEN],
  [RESOURCE_GHODIUM]: [RESOURCE_ZYNTHIUM_KEANITE, RESOURCE_UTRIUM_LEMERGITE],
  // 基础化合物
  [RESOURCE_ZYNTHIUM_KEANITE]: [RESOURCE_ZYNTHIUM, RESOURCE_KEANIUM],
  [RESOURCE_UTRIUM_LEMERGITE]: [RESOURCE_UTRIUM, RESOURCE_LEMERGIUM],
  [RESOURCE_HYDROXIDE]: [RESOURCE_HYDROGEN, RESOURCE_OXYGEN]
};

/**
 * lab 集群的工作状态常量
 */
export const LAB_STATE = {
  GET_TARGET: "getTarget",
  GET_RESOURCE: "getResource",
  WORKING: "working",
  PUT_RESOURCE: "putResource",
  BOOST: "boost"
};

/**
 * lab 集群的目标产物及其数量列表
 * 更新此表后所有工作中的 lab 集群都会自动合成新增的产物
 */
export const labTarget = [
  // 基础
  { target: RESOURCE_HYDROXIDE, targetNumber: 500 },
  { target: RESOURCE_ZYNTHIUM_KEANITE, targetNumber: 500 },
  { target: RESOURCE_UTRIUM_LEMERGITE, targetNumber: 500 },
  // G
  { target: RESOURCE_GHODIUM, targetNumber: 5000 },
  // XKHO2 生产线，强化 RANGE_ATTACK
  { target: RESOURCE_KEANIUM_OXIDE, targetNumber: 300 },
  { target: RESOURCE_KEANIUM_ALKALIDE, targetNumber: 1000 },
  { target: RESOURCE_CATALYZED_KEANIUM_ALKALIDE, targetNumber: 4000 },
  // XLHO2 生产线，强化 HEAL
  { target: RESOURCE_LEMERGIUM_OXIDE, targetNumber: 300 },
  { target: RESOURCE_LEMERGIUM_ALKALIDE, targetNumber: 1000 },
  { target: RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, targetNumber: 4000 },
  // XZHO2 生产线，强化 MOVE
  { target: RESOURCE_ZYNTHIUM_OXIDE, targetNumber: 300 },
  { target: RESOURCE_ZYNTHIUM_ALKALIDE, targetNumber: 1000 },
  { target: RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, targetNumber: 4000 },
  // XZH2O 生产线，强化 WORK 的 dismantle
  { target: RESOURCE_ZYNTHIUM_HYDRIDE, targetNumber: 300 },
  { target: RESOURCE_ZYNTHIUM_ACID, targetNumber: 1000 },
  { target: RESOURCE_CATALYZED_ZYNTHIUM_ACID, targetNumber: 4000 },
  // XGHO2 生产线，强化 TOUGH
  { target: RESOURCE_GHODIUM_OXIDE, targetNumber: 300 },
  { target: RESOURCE_GHODIUM_ALKALIDE, targetNumber: 1000 },
  { target: RESOURCE_CATALYZED_GHODIUM_ALKALIDE, targetNumber: 4000 }
];

/**
 * 战争 boost 需要的所有强化材料，在启动战争状态后，manager 会依次将下列资源填充至 lab
 * 注意：在强化旗帜旁的 lab 数量需要超过下面的资源数量
 */
export const BOOST_RESOURCE: BoostResourceConfig = {
  // 对外战争所需的资源
  WAR: [
    // DISMANTLE
    RESOURCE_CATALYZED_ZYNTHIUM_ACID,
    // RANGED_ATTACK
    RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
    // HEAL
    RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
    // MOVE
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
    // TOUGH
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE
  ],
  // 主动防御所需资源
  DEFENSE: [
    // ATTACK
    RESOURCE_CATALYZED_UTRIUM_ACID,
    // TOUGH
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE,
    // MOVE
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE
  ]
};

/**
 * 当 lab 强化过 creep 之后会检查资源的剩余容量，如果低于下面这个值就会重新装填
 */
export const boostResourceReloadLimit = 900;
