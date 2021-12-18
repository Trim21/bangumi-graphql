import type { Sequelize } from "sequelize";
import { chiiCharacters as _chiiCharacters } from "./chii_characters";
import type {
  chiiCharactersAttributes,
  chiiCharactersCreationAttributes,
} from "./chii_characters";
import { chiiCrtCastIndex as _chiiCrtCastIndex } from "./chii_crt_cast_index";
import type {
  chiiCrtCastIndexAttributes,
  chiiCrtCastIndexCreationAttributes,
} from "./chii_crt_cast_index";
import { chiiCrtSubjectIndex as _chiiCrtSubjectIndex } from "./chii_crt_subject_index";
import type {
  chiiCrtSubjectIndexAttributes,
  chiiCrtSubjectIndexCreationAttributes,
} from "./chii_crt_subject_index";
import { chiiEpisodes as _chiiEpisodes } from "./chii_episodes";
import type {
  chiiEpisodesAttributes,
  chiiEpisodesCreationAttributes,
} from "./chii_episodes";
import { chiiPersonAlias as _chiiPersonAlias } from "./chii_person_alias";
import type {
  chiiPersonAliasAttributes,
  chiiPersonAliasCreationAttributes,
} from "./chii_person_alias";
import { chiiPersonCollects as _chiiPersonCollects } from "./chii_person_collects";
import type {
  chiiPersonCollectsAttributes,
  chiiPersonCollectsCreationAttributes,
} from "./chii_person_collects";
import { chiiPersonCsIndex as _chiiPersonCsIndex } from "./chii_person_cs_index";
import type {
  chiiPersonCsIndexAttributes,
  chiiPersonCsIndexCreationAttributes,
} from "./chii_person_cs_index";
import { chiiPersonFields as _chiiPersonFields } from "./chii_person_fields";
import type {
  chiiPersonFieldsAttributes,
  chiiPersonFieldsCreationAttributes,
} from "./chii_person_fields";
import { chiiPersonRelationship as _chiiPersonRelationship } from "./chii_person_relationship";
import type {
  chiiPersonRelationshipAttributes,
  chiiPersonRelationshipCreationAttributes,
} from "./chii_person_relationship";
import { chiiPersons as _chiiPersons } from "./chii_persons";
import type {
  chiiPersonsAttributes,
  chiiPersonsCreationAttributes,
} from "./chii_persons";
import { chiiSubjectAlias as _chiiSubjectAlias } from "./chii_subject_alias";
import type {
  chiiSubjectAliasAttributes,
  chiiSubjectAliasCreationAttributes,
} from "./chii_subject_alias";
import { chiiSubjectFields as _chiiSubjectFields } from "./chii_subject_fields";
import type {
  chiiSubjectFieldsAttributes,
  chiiSubjectFieldsCreationAttributes,
} from "./chii_subject_fields";
import { chiiSubjectRelations as _chiiSubjectRelations } from "./chii_subject_relations";
import type {
  chiiSubjectRelationsAttributes,
  chiiSubjectRelationsCreationAttributes,
} from "./chii_subject_relations";
import { chiiSubjects as _chiiSubjects } from "./chii_subjects";
import type {
  chiiSubjectsAttributes,
  chiiSubjectsCreationAttributes,
} from "./chii_subjects";

export {
  _chiiCharacters as chiiCharacters,
  _chiiCrtCastIndex as chiiCrtCastIndex,
  _chiiCrtSubjectIndex as chiiCrtSubjectIndex,
  _chiiEpisodes as chiiEpisodes,
  _chiiPersonAlias as chiiPersonAlias,
  _chiiPersonCollects as chiiPersonCollects,
  _chiiPersonCsIndex as chiiPersonCsIndex,
  _chiiPersonFields as chiiPersonFields,
  _chiiPersonRelationship as chiiPersonRelationship,
  _chiiPersons as chiiPersons,
  _chiiSubjectAlias as chiiSubjectAlias,
  _chiiSubjectFields as chiiSubjectFields,
  _chiiSubjectRelations as chiiSubjectRelations,
  _chiiSubjects as chiiSubjects,
};

export type {
  chiiCharactersAttributes,
  chiiCharactersCreationAttributes,
  chiiCrtCastIndexAttributes,
  chiiCrtCastIndexCreationAttributes,
  chiiCrtSubjectIndexAttributes,
  chiiCrtSubjectIndexCreationAttributes,
  chiiEpisodesAttributes,
  chiiEpisodesCreationAttributes,
  chiiPersonAliasAttributes,
  chiiPersonAliasCreationAttributes,
  chiiPersonCollectsAttributes,
  chiiPersonCollectsCreationAttributes,
  chiiPersonCsIndexAttributes,
  chiiPersonCsIndexCreationAttributes,
  chiiPersonFieldsAttributes,
  chiiPersonFieldsCreationAttributes,
  chiiPersonRelationshipAttributes,
  chiiPersonRelationshipCreationAttributes,
  chiiPersonsAttributes,
  chiiPersonsCreationAttributes,
  chiiSubjectAliasAttributes,
  chiiSubjectAliasCreationAttributes,
  chiiSubjectFieldsAttributes,
  chiiSubjectFieldsCreationAttributes,
  chiiSubjectRelationsAttributes,
  chiiSubjectRelationsCreationAttributes,
  chiiSubjectsAttributes,
  chiiSubjectsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const chiiCharacters = _chiiCharacters.initModel(sequelize);
  const chiiCrtCastIndex = _chiiCrtCastIndex.initModel(sequelize);
  const chiiCrtSubjectIndex = _chiiCrtSubjectIndex.initModel(sequelize);
  const chiiEpisodes = _chiiEpisodes.initModel(sequelize);
  const chiiPersonAlias = _chiiPersonAlias.initModel(sequelize);
  const chiiPersonCollects = _chiiPersonCollects.initModel(sequelize);
  const chiiPersonCsIndex = _chiiPersonCsIndex.initModel(sequelize);
  const chiiPersonFields = _chiiPersonFields.initModel(sequelize);
  const chiiPersonRelationship = _chiiPersonRelationship.initModel(sequelize);
  const chiiPersons = _chiiPersons.initModel(sequelize);
  const chiiSubjectAlias = _chiiSubjectAlias.initModel(sequelize);
  const chiiSubjectFields = _chiiSubjectFields.initModel(sequelize);
  const chiiSubjectRelations = _chiiSubjectRelations.initModel(sequelize);
  const chiiSubjects = _chiiSubjects.initModel(sequelize);

  return {
    chiiCharacters: chiiCharacters,
    chiiCrtCastIndex: chiiCrtCastIndex,
    chiiCrtSubjectIndex: chiiCrtSubjectIndex,
    chiiEpisodes: chiiEpisodes,
    chiiPersonAlias: chiiPersonAlias,
    chiiPersonCollects: chiiPersonCollects,
    chiiPersonCsIndex: chiiPersonCsIndex,
    chiiPersonFields: chiiPersonFields,
    chiiPersonRelationship: chiiPersonRelationship,
    chiiPersons: chiiPersons,
    chiiSubjectAlias: chiiSubjectAlias,
    chiiSubjectFields: chiiSubjectFields,
    chiiSubjectRelations: chiiSubjectRelations,
    chiiSubjects: chiiSubjects,
  };
}
