import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiSubjectFieldsAttributes {
  field_sid: number;
  field_tid: number;
  field_tags: string;
  field_rate_1: number;
  field_rate_2: number;
  field_rate_3: number;
  field_rate_4: number;
  field_rate_5: number;
  field_rate_6: number;
  field_rate_7: number;
  field_rate_8: number;
  field_rate_9: number;
  field_rate_10: number;
  field_airtime: number;
  field_rank: number;
  field_year: any;
  field_mon: number;
  field_week_day: number;
  field_date: string;
  field_redirect: number;
}

export type chiiSubjectFieldsPk = "field_sid";
export type chiiSubjectFieldsId = chiiSubjectFields[chiiSubjectFieldsPk];
export type chiiSubjectFieldsOptionalAttributes =
  | "field_sid"
  | "field_tid"
  | "field_rate_1"
  | "field_rate_2"
  | "field_rate_3"
  | "field_rate_4"
  | "field_rate_5"
  | "field_rate_6"
  | "field_rate_7"
  | "field_rate_8"
  | "field_rate_9"
  | "field_rate_10"
  | "field_rank"
  | "field_redirect";
export type chiiSubjectFieldsCreationAttributes = Optional<
  chiiSubjectFieldsAttributes,
  chiiSubjectFieldsOptionalAttributes
>;

export class chiiSubjectFields
  extends Model<
    chiiSubjectFieldsAttributes,
    chiiSubjectFieldsCreationAttributes
  >
  implements chiiSubjectFieldsAttributes
{
  field_sid!: number;
  field_tid!: number;
  field_tags!: string;
  field_rate_1!: number;
  field_rate_2!: number;
  field_rate_3!: number;
  field_rate_4!: number;
  field_rate_5!: number;
  field_rate_6!: number;
  field_rate_7!: number;
  field_rate_8!: number;
  field_rate_9!: number;
  field_rate_10!: number;
  field_airtime!: number;
  field_rank!: number;
  field_year!: any;
  field_mon!: number;
  field_week_day!: number;
  field_date!: string;
  field_redirect!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiSubjectFields {
    return chiiSubjectFields.init(
      {
        field_sid: {
          autoIncrement: true,
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        field_tid: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_tags: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        field_rate_1: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_2: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_3: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_4: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_5: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_6: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_7: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_8: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_9: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_rate_10: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_airtime: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        field_rank: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        field_year: {
          type: DataTypes.DATE(4),
          allowNull: false,
          comment: "放送年份",
        },
        field_mon: {
          type: DataTypes.TINYINT,
          allowNull: false,
          comment: "放送月份",
        },
        field_week_day: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment: "放送日(星期X)",
        },
        field_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          comment: "放送日期",
        },
        field_redirect: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "chii_subject_fields",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "field_sid" }],
          },
          {
            name: "sort_id",
            using: "BTREE",
            fields: [{ name: "field_tid" }],
          },
          {
            name: "subject_airtime",
            using: "BTREE",
            fields: [{ name: "field_airtime" }],
          },
          {
            name: "field_rank",
            using: "BTREE",
            fields: [{ name: "field_rank" }],
          },
          {
            name: "field_date",
            using: "BTREE",
            fields: [{ name: "field_date" }],
          },
          {
            name: "field_year_mon",
            using: "BTREE",
            fields: [{ name: "field_year" }, { name: "field_mon" }],
          },
          {
            name: "field_year",
            using: "BTREE",
            fields: [{ name: "field_year" }],
          },
          {
            name: "query_date",
            using: "BTREE",
            fields: [{ name: "field_sid" }, { name: "field_date" }],
          },
        ],
      }
    );
  }
}
