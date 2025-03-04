// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import VotingdappIDL from '../target/idl/voting.json'
import type { Voting } from '../target/types/voting'

// Re-export the generated IDL and type
export { Voting, VotingdappIDL }

// The programId is imported from the program IDL.
export const VOTINGDAPP_PROGRAM_ID = new PublicKey(VotingdappIDL.address)

// This is a helper function to get the Votingdapp Anchor program.
export function getVotingdappProgram(provider: AnchorProvider, address?: PublicKey) {
  return new Program({ ...VotingdappIDL, address: address ? address.toBase58() : VotingdappIDL.address } as Voting, provider)
}

// This is a helper function to get the program ID for the Votingdapp program depending on the cluster.
export function getVotingdappProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Votingdapp program on devnet and testnet.
      return new PublicKey('xFiR1XTuAumooHDaSaR593G3Dp6wYSHSnbNtqJ9yN5g')
    case 'mainnet-beta':
    default:
      return VOTINGDAPP_PROGRAM_ID
  }
}
