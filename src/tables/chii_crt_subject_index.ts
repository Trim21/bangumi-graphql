import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiCrtSubjectIndexAttributes {
  crt_id: number;
  subject_id: number;
  subject_type_id: number;
  crt_type: number;
  ctr_appear_eps: string;
  crt_order: number;
}

export type chiiCrtSubjectIndexPk = "crt_id" | "subject_id";
export type chiiCrtSubjectIndexId = chiiCrtSubjectIndex[chiiCrtSubjectIndexPk];
export type chiiCrtSubjectIndexCreationAttributes =
  chiiCrtSubjectIndexAttributes;

export class chiiCrtSubjectIndex
  extends Model<
    chiiCrtSubjectIndexAttributes,
    chiiCrtSubjectIndexCreationAttributes
  >
  implements chiiCrtSubjectIndexAttributes
{
  crt_id!: number;
  subject_id!: number;
  subject_type_id!: number;
  crt_type!: number;
  ctr_appear_eps!: string;
  crt_order!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiCrtSubjectIndex {
    return chiiCrtSubjectIndex.init(
      {
        crt_id: {
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
        },
        crt_type: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "主角，配角",
        },
        ctr_appear_eps: {
          type: DataTypes.TEXT,
          allowNull: false,
          comment: "可选，角色出场的的章节",
        },
        crt_order: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_crt_subject_index",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "crt_id" }, { name: "subject_id" }],
          },
          {
            name: "subject_id",
            using: "BTREE",
            fields: [{ name: "subject_id" }],
          },
          {
            name: "crt_type",
            using: "BTREE",
            fields: [{ name: "crt_type" }],
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
