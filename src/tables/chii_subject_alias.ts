import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiSubjectAliasAttributes {
  subject_id: number;
  alias_name: string;
  subject_type_id: number;
  alias_type: number;
  alias_key: string;
}

export type chiiSubjectAliasOptionalAttributes =
  | "subject_type_id"
  | "alias_type";
export type chiiSubjectAliasCreationAttributes = Optional<
  chiiSubjectAliasAttributes,
  chiiSubjectAliasOptionalAttributes
>;

export class chiiSubjectAlias
  extends Model<chiiSubjectAliasAttributes, chiiSubjectAliasCreationAttributes>
  implements chiiSubjectAliasAttributes
{
  subject_id!: number;
  alias_name!: string;
  subject_type_id!: number;
  alias_type!: number;
  alias_key!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiSubjectAlias {
    return chiiSubjectAlias.init(
      {
        subject_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        alias_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        subject_type_id: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "所属条目的类型",
        },
        alias_type: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
          comment: "是别名还是条目名",
        },
        alias_key: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_subject_alias",
        timestamps: false,
        indexes: [
          {
            name: "subject_id",
            using: "BTREE",
            fields: [{ name: "subject_id" }],
          },
        ],
      }
    );
  }
}
