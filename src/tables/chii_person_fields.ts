import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiPersonFieldsAttributes {
  prsn_cat: "prsn" | "crt";
  prsn_id: number;
  gender: number;
  bloodtype: number;
  birth_year: any;
  birth_mon: number;
  birth_day: number;
}

export type chiiPersonFieldsPk = "prsn_cat" | "prsn_id";
export type chiiPersonFieldsId = chiiPersonFields[chiiPersonFieldsPk];
export type chiiPersonFieldsCreationAttributes = chiiPersonFieldsAttributes;

export class chiiPersonFields
  extends Model<chiiPersonFieldsAttributes, chiiPersonFieldsCreationAttributes>
  implements chiiPersonFieldsAttributes
{
  prsn_cat!: "prsn" | "crt";
  prsn_id!: number;
  gender!: number;
  bloodtype!: number;
  birth_year!: any;
  birth_mon!: number;
  birth_day!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiPersonFields {
    return chiiPersonFields.init(
      {
        prsn_cat: {
          type: DataTypes.ENUM("prsn", "crt"),
          allowNull: false,
          primaryKey: true,
        },
        prsn_id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        gender: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        bloodtype: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        birth_year: {
          type: DataTypes.DATE(4),
          allowNull: false,
        },
        birth_mon: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
        birth_day: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_person_fields",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
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
