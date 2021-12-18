import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiPersonRelationshipAttributes {
  prsn_type: "prsn" | "crt";
  prsn_id: number;
  relat_prsn_type: "prsn" | "crt";
  relat_prsn_id: number;
  relat_type: number;
}

export type chiiPersonRelationshipCreationAttributes =
  chiiPersonRelationshipAttributes;

export class chiiPersonRelationship
  extends Model<
    chiiPersonRelationshipAttributes,
    chiiPersonRelationshipCreationAttributes
  >
  implements chiiPersonRelationshipAttributes
{
  prsn_type!: "prsn" | "crt";
  prsn_id!: number;
  relat_prsn_type!: "prsn" | "crt";
  relat_prsn_id!: number;
  relat_type!: number;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof chiiPersonRelationship {
    return chiiPersonRelationship.init(
      {
        prsn_type: {
          type: DataTypes.ENUM("prsn", "crt"),
          allowNull: false,
        },
        prsn_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        relat_prsn_type: {
          type: DataTypes.ENUM("prsn", "crt"),
          allowNull: false,
        },
        relat_prsn_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        relat_type: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          comment: "任职于，从属,聘用,嫁给，",
        },
      },
      {
        sequelize,
        tableName: "chii_person_relationship",
        timestamps: false,
      }
    );
  }
}
