<script setup>
</script>

<template>
  <div class="footer">
    <div class="footer__info">
      <p>Денисенко Илья</p>
      <img src="@/assets/icons/GitHub.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    margin-top: auto;
    padding: 0 220px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 20px 2px rgba(100, 100, 111, 0.15);

      .footer__info {
        display: flex;
        justify-content: space-between;
        height: 50px;
        max-width: 250px;
        align-items: center;
        margin-left: auto;
      }
  }
</style>
