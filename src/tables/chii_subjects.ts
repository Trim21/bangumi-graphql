import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiSubjectsAttributes {
  subject_id: number;
  subject_type_id: number;
  subject_name: string;
  subject_name_cn: string;
  subject_uid: string;
  subject_creator: number;
  subject_dateline: number;
  subject_image: string;
  subject_platform: number;
  field_infobox: string;
  field_summary: string;
  field_5: string;
  field_volumes: number;
  field_eps: number;
  subject_wish: number;
  subject_collect: number;
  subject_doing: number;
  subject_on_hold: number;
  subject_dropped: number;
  subject_series: number;
  subject_series_entry: number;
  subject_idx_cn: string;
  subject_airtime: number;
  subject_nsfw: number;
  subject_ban: number;
}

export type chiiSubjectsPk = "subject_id";
export type chiiSubjectsId = chiiSubjects[chiiSubjectsPk];
export type chiiSubjectsOptionalAttributes =
  | "subject_id"
  | "subject_type_id"
  | "subject_dateline"
  | "subject_platform"
  | "field_volumes"
  | "field_eps"
  | "subject_wish"
  | "subject_collect"
  | "subject_doing"
  | "subject_on_hold"
  | "subject_dropped"
  | "subject_series"
  | "subject_series_entry"
  | "subject_ban";
export type chiiSubjectsCreationAttributes = Optional<
  chiiSubjectsAttributes,
  chiiSubjectsOptionalAttributes
>;

export class chiiSubjects
  extends Model<chiiSubjectsAttributes, chiiSubjectsCreationAttributes>
  implements chiiSubjectsAttributes
{
  subject_id!: number;
  subject_type_id!: number;
  subject_name!: string;
  subject_name_cn!: string;
  subject_uid!: string;
  subject_creator!: number;
  subject_dateline!: number;
  subject_image!: string;
  subject_platform!: number;
  field_infobox!: string;
  field_summary!: string;
  field_5!: string;
  field_volumes!: number;
  field_eps!: number;
  subject_wish!: number;
  subject_collect!: number;
  subject_doing!: number;
  subject_on_hold!: number;
  subject_dropped!: number;
  subject_series!: number;
  subject_series_entry!: number;
  subject_idx_cn!: string;
  subject_airtime!: number;
  subject_nsfw!: number;
  subject_ban!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiSubjects {
    return chiiSubjects.init(
      {
        subject_id: {
          autoIncrement: true,
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        subject_type_id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_name: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        subject_name_cn: {
          type: DataTypes.STRING(80),
          allowNull: false,
        },
        subject_uid: {
          type: DataTypes.STRING(20),
          allowNull: false,
          comment: "isbn / imdb",
        },
        subject_creator: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        subject_dateline: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_image: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        subject_platform: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_infobox: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        field_summary: {
          type: DataTypes.TEXT,
          allowNull: false,
          comment: "summary",
        },
        field_5: {
          type: DataTypes.TEXT,
          allowNull: false,
          comment: "author summary",
        },
        field_volumes: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "卷数",
        },
        field_eps: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_wish: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_collect: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_doing: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_on_hold: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "搁置人数",
        },
        subject_dropped: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "抛弃人数",
        },
        subject_series: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_series_entry: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        subject_idx_cn: {
          type: DataTypes.STRING(1),
          allowNull: false,
        },
        subject_airtime: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        subject_nsfw: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        subject_ban: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "chii_subjects",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "subject_id" }],
          },
          {
            name: "subject_name_cn",
            using: "BTREE",
            fields: [{ name: "subject_name_cn" }],
          },
          {
            name: "subject_platform",
            using: "BTREE",
            fields: [{ name: "subject_platform" }],
          },
          {
            name: "subject_creator",
            using: "BTREE",
            fields: [{ name: "subject_creator" }],
          },
          {
            name: "subject_series",
            using: "BTREE",
            fields: [{ name: "subject_series" }],
          },
          {
            name: "subject_series_entry",
            using: "BTREE",
            fields: [{ name: "subject_series_entry" }],
          },
          {
            name: "subject_airtime",
            using: "BTREE",
            fields: [{ name: "subject_airtime" }],
          },
          {
            name: "subject_ban",
            using: "BTREE",
            fields: [{ name: "subject_ban" }],
          },
          {
            name: "subject_idx_cn",
            using: "BTREE",
            fields: [{ name: "subject_idx_cn" }, { name: "subject_type_id" }],
          },
          {
            name: "subject_type_id",
            using: "BTREE",
            fields: [{ name: "subject_type_id" }],
          },
          {
            name: "subject_name",
            using: "BTREE",
            fields: [{ name: "subject_name" }],
          },
          {
            name: "order_by_name",
            using: "BTREE",
            fields: [
              { name: "subject_ban" },
              { name: "subject_type_id" },
              { name: "subject_series" },
              { name: "subject_platform" },
              { name: "subject_name" },
            ],
          },
          {
            name: "browser",
            using: "BTREE",
            fields: [
              { name: "subject_ban" },
              { name: "subject_type_id" },
              { name: "subject_series" },
              { name: "subject_platform" },
            ],
          },
          {
            name: "subject_nsfw",
            using: "BTREE",
            fields: [{ name: "subject_nsfw" }],
          },
        ],
      }
    );
  }
}
