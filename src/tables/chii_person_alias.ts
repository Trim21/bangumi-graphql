import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiPersonAliasAttributes {
  prsn_cat: "prsn" | "crt";
  prsn_id: number;
  alias_name: string;
  alias_type: number;
  alias_key: string;
}

export type chiiPersonAliasCreationAttributes = chiiPersonAliasAttributes;

export class chiiPersonAlias
  extends Model<chiiPersonAliasAttributes, chiiPersonAliasCreationAttributes>
  implements chiiPersonAliasAttributes
{
  prsn_cat!: "prsn" | "crt";
  prsn_id!: number;
  alias_name!: string;
  alias_type!: number;
  alias_key!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiPersonAlias {
    return chiiPersonAlias.init(
      {
        prsn_cat: {
          type: DataTypes.ENUM("prsn", "crt"),
          allowNull: false,
        },
        prsn_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        alias_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        alias_type: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        alias_key: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_person_alias",
        timestamps: false,
        indexes: [
          {
            name: "prsn_cat",
            using: "BTREE",
            fields: [{ name: "prsn_cat" }, { name: "prsn_id" }],
          },
          {
            name: "prsn_id",
            using: "BTREE",
            fields: [{ name: "prsn_id" }],
          },
        ],
      }
    );
  }
}
