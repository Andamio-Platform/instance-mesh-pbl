import { AndamioConfig, CourseManagementConfig, ProjectManagementConfig } from "@andamiojs/core";

// Project Management
// import { escrows } from "./escrow";

// Course Management
import assignment from "../cardano/plutus/assignment.json"
import courseReference from "../cardano/plutus/courseReference.json"
import learnerReference from "../cardano/plutus/learnerReference.json"
import learnerMintingReference from "../cardano/plutus/learnerMintingReference.json"
import moduleMintingReference from "../cardano/plutus/moduleMintingReference.json"

// Tokens
import courseManagementTokens from './courseManagementTokens.json'
import projectManagementTokens from './projectManagementTokens.json'

export const andamioConfig: AndamioConfig<CourseManagementConfig> = {
  title: "Mesh PBL",
  baseAddress: "",
  enterpriseAddress: "",
  rewardAddress: "",
  // at the moment, each contract has a different reference UTxO Address - see individual contract configs
  // referenceScriptAddress: '',
  metadataKey: "",
  network: "0",
  config: {
    assignment: assignment,
    courseReference: courseReference,
    learnerReference: learnerReference,
    learnerMintingReference: learnerMintingReference,
    moduleMintingReference: moduleMintingReference,
    courseManagementTokens: courseManagementTokens,
    coursemanagementNftArtwork: {
      // move to a file?
      learnerNFTURL: "https://www.andamio.io/andamio.png",
      courseModuleNFTURL: "https://www.andamio.io/andamio.png",
      courseCreatorNFTURL: "https://www.andamio.io/andamio.png",
      courseDeciderNFTURL: "https://www.andamio.io/andamio.png",
    },
  },
};
