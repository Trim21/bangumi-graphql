import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiSubjectRelationsAttributes {
  rlt_subject_id: number;
  rlt_subject_type_id: number;
  rlt_relation_type: number;
  rlt_related_subject_id: number;
  rlt_related_subject_type_id: number;
  rlt_vice_versa: number;
  rlt_order: number;
}

export type chiiSubjectRelationsPk =
  | "rlt_subject_id"
  | "rlt_related_subject_id"
  | "rlt_vice_versa";
export type chiiSubjectRelationsId =
  chiiSubjectRelations[chiiSubjectRelationsPk];
export type chiiSubjectRelationsCreationAttributes =
  chiiSubjectRelationsAttributes;

export class chiiSubjectRelations
  extends Model<
    chiiSubjectRelationsAttributes,
    chiiSubjectRelationsCreationAttributes
  >
  implements chiiSubjectRelationsAttributes
{
  rlt_subject_id!: number;
  rlt_subject_type_id!: number;
  rlt_relation_type!: number;
  rlt_related_subject_id!: number;
  rlt_related_subject_type_id!: number;
  rlt_vice_versa!: number;
  rlt_order!: number;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof chiiSubjectRelations {
    return chiiSubjectRelations.init(
      {
        rlt_subject_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          comment: "关联主 ID",
        },
        rlt_subject_type_id: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        rlt_relation_type: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          comment: "关联类型",
        },
        rlt_related_subject_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          comment: "关联目标 ID",
        },
        rlt_related_subject_type_id: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "关联目标类型",
        },
        rlt_vice_versa: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        rlt_order: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "关联排序",
        },
      },
      {
        sequelize,
        tableName: "chii_subject_relations",
        timestamps: false,
        indexes: [
          {
            name: "rlt_subject_id",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "rlt_subject_id" },
              { name: "rlt_related_subject_id" },
              { name: "rlt_vice_versa" },
            ],
          },
          {
            name: "rlt_related_subject_type_id",
            using: "BTREE",
            fields: [
              { name: "rlt_related_subject_type_id" },
              { name: "rlt_order" },
            ],
          },
          {
            name: "rlt_subject_type_id",
            using: "BTREE",
            fields: [{ name: "rlt_subject_type_id" }],
          },
          {
            name: "rlt_relation_type",
            using: "BTREE",
            fields: [
              { name: "rlt_relation_type" },
              { name: "rlt_subject_id" },
              { name: "rlt_related_subject_id" },
            ],
          },
        ],
      }
    );
  }
}
