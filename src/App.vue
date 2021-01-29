<template>
  <div id="app">
    <button type="button" @click="btnOnClick">Add</button>

    <div id="printMe">

      <p class="tanggal" >Tanggal : </p>
      <p class="namakasir">Nama Kasir : {(Your Name)} </p>
      <p>==============================</p> 
      <p v-for="(tableData, k) in tableDatas" :key="k"> 
        <input class="" type="text" v-model="tableData.namakasir" v-on:keyup="calculateKsr(tableData)" />
      </p>
    </div>
    <button @click="print">Print</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDatas: []
    }

  },
  methods: {
    btnOnClick(_v) {
      this.tableDatas.push({
        namakasir: ""
      });
    },
     print() {
      this.$htmlToPaper('printMe');
    }
  }
};
</script>

<style>

</style>