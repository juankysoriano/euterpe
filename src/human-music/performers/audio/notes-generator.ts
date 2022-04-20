import { CellularAutomata1D } from "../../cellular-automata/1d/cellularAutomata1D";
import { TreeNode } from "../../utils/data-structures/TreeNote";
import { Chord, ChordVoice, progressions, Voice } from './music-models';
export class ChordsGenerator {
   private tone: number
   private currentNode: TreeNode<Chord> = progressions.shuffle()
   private recordCount = 0
   private finishedRecording = false
   private record: TreeNode<Chord>[] = []
   private automata: CellularAutomata1D

   constructor(automata: CellularAutomata1D) {
      this.automata = automata
      this.tone = Math.floor(Math.random() * 13) - 6
   }

   nextChord() {
      if (this.finishedRecording) {
         const index = this.recordCount % this.record.length
         this.currentNode = this.record[index]
         this.recordCount++
      } else {
         const index = this.automata.leeDistance() % this.currentNode.children.length
         this.currentNode = this.currentNode.children[index]
         this.record.push(this.currentNode)
         this.finishedRecording = this.currentNode.isLeaf
      }
      console.log(`ID: ${this.currentNode.value.label} Notes: ${this.currentNode.value.notes.map((note) => note - 6)}`)
   }

   get progressionFinished(): boolean {
      const isFirstChord = (this.recordCount - 1) % this.record.length === 0
      return this.finishedRecording && isFirstChord
   }

   generateNote = (voice: Voice) =>
      this.currentNode.value.notes[(this.automata.leeDistance() + voice.positionInChord) % this.currentNode.value.notes.length] +
      voice.octave * 12 +
      this.tone

   currentChord = (chordVoice: ChordVoice) =>
      this.currentNode.value.notes.map((note) => note + chordVoice.octave * 12 + this.tone)
}
