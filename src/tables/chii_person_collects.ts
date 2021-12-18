import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiPersonCollectsAttributes {
  prsn_clt_id: number;
  prsn_clt_cat: "prsn" | "crt";
  prsn_clt_mid: number;
  prsn_clt_uid: number;
  prsn_clt_dateline: number;
}

export type chiiPersonCollectsPk = "prsn_clt_id";
export type chiiPersonCollectsId = chiiPersonCollects[chiiPersonCollectsPk];
export type chiiPersonCollectsCreationAttributes = chiiPersonCollectsAttributes;

export class chiiPersonCollects
  extends Model<
    chiiPersonCollectsAttributes,
    chiiPersonCollectsCreationAttributes
  >
  implements chiiPersonCollectsAttributes
{
  prsn_clt_id!: number;
  prsn_clt_cat!: "prsn" | "crt";
  prsn_clt_mid!: number;
  prsn_clt_uid!: number;
  prsn_clt_dateline!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiPersonCollects {
    return chiiPersonCollects.init(
      {
        prsn_clt_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        prsn_clt_cat: {
          type: DataTypes.ENUM("prsn", "crt"),
          allowNull: false,
        },
        prsn_clt_mid: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        prsn_clt_uid: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        prsn_clt_dateline: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_person_collects",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "prsn_clt_id" }],
          },
          {
            name: "prsn_clt_cat",
            using: "BTREE",
            fields: [{ name: "prsn_clt_cat" }, { name: "prsn_clt_mid" }],
          },
          {
            name: "prsn_clt_uid",
            using: "BTREE",
            fields: [{ name: "prsn_clt_uid" }],
          },
          {
            name: "prsn_clt_mid",
            using: "BTREE",
            fields: [{ name: "prsn_clt_mid" }],
          },
        ],
      }
    );
  }
}
