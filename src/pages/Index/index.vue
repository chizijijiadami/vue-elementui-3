<template>
  <div>
    <p class="index-p">Index-index</p>
    <p>
      <svg aria-hidden="true">
        <use xlink:href="#icon-breakfast" />
      </svg>
    </p>
    <p>
      <svg-icon iconName="breakfast"></svg-icon>
    </p>
    <div>
      <pagination :total="500" />
      <!-- <pagination :total="500" @sizeChange="sizeChange"/> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexIndex",
  // methods:{
  //   sizeChange(pageSize){
  //     console.log(pageSize,'---index');
      
  //   }
  // }
};
</script>