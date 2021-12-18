import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiPersonsAttributes {
  prsn_id: number;
  prsn_name: string;
  prsn_type: number;
  prsn_infobox: string;
  prsn_producer: number;
  prsn_mangaka: number;
  prsn_artist: number;
  prsn_seiyu: number;
  prsn_writer: number;
  prsn_illustrator: number;
  prsn_actor: number;
  prsn_summary: string;
  prsn_img: string;
  prsn_img_anidb: string;
  prsn_comment: number;
  prsn_collects: number;
  prsn_dateline: number;
  prsn_lastpost: number;
  prsn_lock: number;
  prsn_anidb_id: number;
  prsn_ban: number;
  prsn_redirect: number;
  prsn_nsfw: number;
}

export type chiiPersonsPk = "prsn_id";
export type chiiPersonsId = chiiPersons[chiiPersonsPk];
export type chiiPersonsOptionalAttributes =
  | "prsn_writer"
  | "prsn_illustrator"
  | "prsn_ban"
  | "prsn_redirect";
export type chiiPersonsCreationAttributes = Optional<
  chiiPersonsAttributes,
  chiiPersonsOptionalAttributes
>;

export class chiiPersons
  extends Model<chiiPersonsAttributes, chiiPersonsCreationAttributes>
  implements chiiPersonsAttributes
{
  prsn_id!: number;
  prsn_name!: string;
  prsn_type!: number;
  prsn_infobox!: string;
  prsn_producer!: number;
  prsn_mangaka!: number;
  prsn_artist!: number;
  prsn_seiyu!: number;
  prsn_writer!: number;
  prsn_illustrator!: number;
  prsn_actor!: number;
  prsn_summary!: string;
  prsn_img!: string;
  prsn_img_anidb!: string;
  prsn_comment!: number;
  prsn_collects!: number;
  prsn_dateline!: number;
  prsn_lastpost!: number;
  prsn_lock!: number;
  prsn_anidb_id!: number;
  prsn_ban!: number;
  prsn_redirect!: number;
  prsn_nsfw!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiPersons {
    return chiiPersons.init(
      {
        prsn_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        prsn_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        prsn_type: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "个人，公司，组合",
        },
        prsn_infobox: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        prsn_producer: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        prsn_mangaka: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        prsn_artist: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        prsn_seiyu: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        prsn_writer: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
          comment: "作家",
        },
        prsn_illustrator: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
          comment: "绘师",
        },
        prsn_actor: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          comment: "演员",
        },
        prsn_summary: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        prsn_img: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        prsn_img_anidb: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        prsn_comment: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        prsn_collects: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        prsn_dateline: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        prsn_lastpost: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        prsn_lock: {
          type: DataTypes.TINYINT,
          allowNull: false,
        },
        prsn_anidb_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        prsn_ban: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        prsn_redirect: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        prsn_nsfw: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_persons",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "prsn_id" }],
          },
          {
            name: "prsn_type",
            using: "BTREE",
            fields: [{ name: "prsn_type" }],
          },
          {
            name: "prsn_producer",
            using: "BTREE",
            fields: [{ name: "prsn_producer" }],
          },
          {
            name: "prsn_mangaka",
            using: "BTREE",
            fields: [{ name: "prsn_mangaka" }],
          },
          {
            name: "prsn_artist",
            using: "BTREE",
            fields: [{ name: "prsn_artist" }],
          },
          {
            name: "prsn_seiyu",
            using: "BTREE",
            fields: [{ name: "prsn_seiyu" }],
          },
          {
            name: "prsn_writer",
            using: "BTREE",
            fields: [{ name: "prsn_writer" }],
          },
          {
            name: "prsn_illustrator",
            using: "BTREE",
            fields: [{ name: "prsn_illustrator" }],
          },
          {
            name: "prsn_lock",
            using: "BTREE",
            fields: [{ name: "prsn_lock" }],
          },
          {
            name: "prsn_ban",
            using: "BTREE",
            fields: [{ name: "prsn_ban" }],
          },
          {
            name: "prsn_actor",
            using: "BTREE",
            fields: [{ name: "prsn_actor" }],
          },
        ],
      }
    );
  }
}
