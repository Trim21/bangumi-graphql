import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiEpisodesAttributes {
  ep_id: number;
  ep_subject_id: number;
  ep_sort: number;
  ep_type: number;
  ep_disc: number;
  ep_name: string;
  ep_name_cn: string;
  ep_rate: number;
  ep_duration: string;
  ep_airdate: string;
  ep_online: string;
  ep_comment: number;
  ep_resources: number;
  ep_desc: string;
  ep_dateline: number;
  ep_lastpost: number;
  ep_lock: number;
  ep_ban: number;
}

export type chiiEpisodesPk = "ep_id";
export type chiiEpisodesId = chiiEpisodes[chiiEpisodesPk];
export type chiiEpisodesOptionalAttributes =
  | "ep_id"
  | "ep_sort"
  | "ep_disc"
  | "ep_lock"
  | "ep_ban";
export type chiiEpisodesCreationAttributes = Optional<
  chiiEpisodesAttributes,
  chiiEpisodesOptionalAttributes
>;

export class chiiEpisodes
  extends Model<chiiEpisodesAttributes, chiiEpisodesCreationAttributes>
  implements chiiEpisodesAttributes
{
  ep_id!: number;
  ep_subject_id!: number;
  ep_sort!: number;
  ep_type!: number;
  ep_disc!: number;
  ep_name!: string;
  ep_name_cn!: string;
  ep_rate!: number;
  ep_duration!: string;
  ep_airdate!: string;
  ep_online!: string;
  ep_comment!: number;
  ep_resources!: number;
  ep_desc!: string;
  ep_dateline!: number;
  ep_lastpost!: number;
  ep_lock!: number;
  ep_ban!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiEpisodes {
    return chiiEpisodes.init(
      {
        ep_id: {
          autoIncrement: true,
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        ep_subject_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        ep_sort: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0,
        },
        ep_type: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        ep_disc: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "碟片数",
        },
        ep_name: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        ep_name_cn: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        ep_rate: {
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        ep_duration: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        ep_airdate: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        ep_online: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        ep_comment: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        ep_resources: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        ep_desc: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        ep_dateline: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ep_lastpost: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ep_lock: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        ep_ban: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "chii_episodes",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "ep_id" }],
          },
          {
            name: "ep_sort",
            using: "BTREE",
            fields: [{ name: "ep_sort" }],
          },
          {
            name: "ep_disc",
            using: "BTREE",
            fields: [{ name: "ep_disc" }],
          },
          {
            name: "ep_subject_id",
            using: "BTREE",
            fields: [{ name: "ep_subject_id" }],
          },
          {
            name: "ep_lastpost",
            using: "BTREE",
            fields: [{ name: "ep_lastpost" }],
          },
          {
            name: "ep_ban",
            using: "BTREE",
            fields: [{ name: "ep_ban" }],
          },
          {
            name: "ep_subject_id_2",
            using: "BTREE",
            fields: [
              { name: "ep_subject_id" },
              { name: "ep_ban" },
              { name: "ep_sort" },
            ],
          },
        ],
      }
    );
  }
}
