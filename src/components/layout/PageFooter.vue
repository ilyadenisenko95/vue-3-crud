<template>
  <div class="footer">
    <div class="footer__info">
      <p class="footer__info-text">Денисенко Илья</p>
      <img src="@/assets/icons/GitHub.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  background: rgb(255 255 255);
  box-shadow: 0 0 20px 2px rgb(100 100 111 / 0.15);

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    max-width: 1064px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 32px;
  }

  &__info-text {
    margin-right: 37px;
    margin-left: auto;
  }
}

@media (width <= 768px) {
  .footer__info {
    padding: 0 20px;
  }
}
</style>
