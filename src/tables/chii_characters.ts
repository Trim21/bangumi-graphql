import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface chiiCharactersAttributes {
  crt_id: number;
  crt_name: string;
  crt_role: number;
  crt_infobox: string;
  crt_summary: string;
  crt_img: string;
  crt_comment: number;
  crt_collects: number;
  crt_dateline: number;
  crt_lastpost: number;
  crt_lock: number;
  crt_img_anidb: string;
  crt_anidb_id: number;
  crt_ban: number;
  crt_redirect: number;
  crt_nsfw: number;
}

export type chiiCharactersPk = "crt_id";
export type chiiCharactersId = chiiCharacters[chiiCharactersPk];
export type chiiCharactersOptionalAttributes =
  | "crt_comment"
  | "crt_lock"
  | "crt_ban"
  | "crt_redirect";
export type chiiCharactersCreationAttributes = Optional<
  chiiCharactersAttributes,
  chiiCharactersOptionalAttributes
>;

export class chiiCharacters
  extends Model<chiiCharactersAttributes, chiiCharactersCreationAttributes>
  implements chiiCharactersAttributes
{
  crt_id!: number;
  crt_name!: string;
  crt_role!: number;
  crt_infobox!: string;
  crt_summary!: string;
  crt_img!: string;
  crt_comment!: number;
  crt_collects!: number;
  crt_dateline!: number;
  crt_lastpost!: number;
  crt_lock!: number;
  crt_img_anidb!: string;
  crt_anidb_id!: number;
  crt_ban!: number;
  crt_redirect!: number;
  crt_nsfw!: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof chiiCharacters {
    return chiiCharacters.init(
      {
        crt_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          primaryKey: true,
        },
        crt_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        crt_role: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          comment: "角色，机体，组织。。",
        },
        crt_infobox: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        crt_summary: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        crt_img: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        crt_comment: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        crt_collects: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        crt_dateline: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        crt_lastpost: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        crt_lock: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
        },
        crt_img_anidb: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        crt_anidb_id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
        },
        crt_ban: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        crt_redirect: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          defaultValue: 0,
        },
        crt_nsfw: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "chii_characters",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "crt_id" }],
          },
          {
            name: "crt_role",
            using: "BTREE",
            fields: [{ name: "crt_role" }],
          },
          {
            name: "crt_lock",
            using: "BTREE",
            fields: [{ name: "crt_lock" }],
          },
          {
            name: "crt_ban",
            using: "BTREE",
            fields: [{ name: "crt_ban" }],
          },
        ],
      }
    );
  }
}
