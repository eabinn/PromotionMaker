<template>
  <div class="editor-section-actions">
    <button class="btn btn-primary" @click="props.editSection(props.sectionId)">
      섹션 정보 변경
    </button>
    <div
      :id="props.sectionId + ''"
      class="dropzone"
      @dragover="props.dragCopyOver($event)"
      @drop="props.dragCopyEnd($event)"
    >
      DROPZONE
    </div>
    <button class="btn btn-danger" @click="props.deleteSection">섹션 삭제</button>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  sectionId: number
  editSection(sectionId: number): void
  dragCopyEnd(e: DragEvent): void
  dragCopyOver(e: DragEvent): void
  deleteSection(): void
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.editor-section-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #000;
}

.dropzone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  border: 1px solid black;
  border-style: dotted;
  background-color: #ffffff;
}

button {
  height: 100%;
}
</style>
