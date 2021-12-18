import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiPersonCsIndexAttributes {
  prsn_type: "prsn" | "crt";
  prsn_id: number;
  prsn_position: number;
  subject_id: number;
  subject_type_id: number;
  summary: string;
  prsn_appear_eps: string;
}

export type chiiPersonCsIndexPk =
  | "prsn_type"
  | "prsn_id"
  | "prsn_position"
  | "subject_id";
export type chiiPersonCsIndexId = chiiPersonCsIndex[chiiPersonCsIndexPk];
export type chiiPersonCsIndexCreationAttributes = chiiPersonCsIndexAttributes;

export class chiiPersonCsIndex
  extends Model<
    chiiPersonCsIndexAttributes,
    chiiPersonCsIndexCreationAttributes
  >
  implements chiiPersonCsIndexAttributes
{
  prsn_type!: "prsn" | "crt";
  prsn_id!: number;
  prsn_position!: number;
  subject_id!: number;
  subject_type_id!: number;
  summary!: string;
  prsn_appear_eps!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiPersonCsIndex {
    return chiiPersonCsIndex.init(
      {
        prsn_type: {
          type: DataTypes.ENUM("prsn", "crt"),
          allowNull: false,
          primaryKey: true,
        },
        prsn_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        prsn_position: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          comment: "监督，原案，脚本,..",
        },
        subject_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        subject_type_id: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        summary: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        prsn_appear_eps: {
          type: DataTypes.TEXT,
          allowNull: false,
          comment: "可选，人物参与的章节",
        },
      },
      {
        sequelize,
        tableName: "chii_person_cs_index",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "prsn_type" },
              { name: "prsn_id" },
              { name: "subject_id" },
              { name: "prsn_position" },
            ],
          },
          {
            name: "subject_id",
            using: "BTREE",
            fields: [{ name: "subject_id" }],
          },
          {
            name: "prsn_position",
            using: "BTREE",
            fields: [{ name: "prsn_position" }],
          },
          {
            name: "prsn_id",
            using: "BTREE",
            fields: [{ name: "prsn_id" }],
          },
          {
            name: "subject_type_id",
            using: "BTREE",
            fields: [{ name: "subject_type_id" }],
          },
        ],
      }
    );
  }
}
