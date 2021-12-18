import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiCrtCastIndexAttributes {
  crt_id: number;
  prsn_id: number;
  subject_id: number;
  subject_type_id: number;
  summary: string;
}

export type chiiCrtCastIndexPk = "crt_id" | "prsn_id" | "subject_id";
export type chiiCrtCastIndexId = chiiCrtCastIndex[chiiCrtCastIndexPk];
export type chiiCrtCastIndexCreationAttributes = chiiCrtCastIndexAttributes;

export class chiiCrtCastIndex
  extends Model<chiiCrtCastIndexAttributes, chiiCrtCastIndexCreationAttributes>
  implements chiiCrtCastIndexAttributes
{
  crt_id!: number;
  prsn_id!: number;
  subject_id!: number;
  subject_type_id!: number;
  summary!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiCrtCastIndex {
    return chiiCrtCastIndex.init(
      {
        crt_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        prsn_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        subject_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        subject_type_id: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "根据人物归类查询角色，动画，书籍，游戏",
        },
        summary: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: "幼年，男乱马，女乱马，变身形态，少女形态。。",
        },
      },
      {
        sequelize,
        tableName: "chii_crt_cast_index",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "crt_id" },
              { name: "prsn_id" },
              { name: "subject_id" },
            ],
          },
          {
            name: "prsn_id",
            using: "BTREE",
            fields: [{ name: "prsn_id" }],
          },
          {
            name: "subject_id",
            using: "BTREE",
            fields: [{ name: "subject_id" }],
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
