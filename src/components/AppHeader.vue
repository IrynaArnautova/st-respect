<template>
  <header>
    <div class="header_inner container">
      <svg class="header_logo">
        <use :xlink:href="`${sprite}#companyLogoShort`"></use>
      </svg>
      <nav class="header_nav">
        <a href="javascript:;" class="header_nav-link">Services</a>
        <a href="javascript:;" class="header_nav-link">Case Studies</a>
        <a href="javascript:;" class="header_nav-link">Blog</a>
        <a href="javascript:;" class="header_nav-link header_nav-auto">We're hiring</a>
        <a href="javascript:;" class="header_nav-link">Contacts</a>
      </nav>
      <a href="javascript:;" class="header_btn base_btn red-text">
        <svg class="base_btn-arrow">
          <use :xlink:href="`${sprite}#arrowForButton`"></use>
        </svg>
        Book a call
      </a>
    </div>
  </header>
</template>

<style>
  .is-loading header{
    transform: translateY(100px);
  }
  header {
    background: #E63E3A;
    position: sticky;
    top: 0;
    z-index: 10000;
    margin: calc(100vh - 81px) auto 0;
    padding: 15px 0;
    transform: translateY(0);
    transition: transform .8s ease-out;
  }
  .header_inner {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .header_logo {
    height: 51px;
    width: 78px;
    flex-shrink: 0;
  }
  .header_nav {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 0 0 8vw;
    gap: 80px;
  }
  .header_nav-link {
    color: #101820;
    white-space: nowrap;
  }
  .header_nav-link.header_nav-auto {
    margin: 0 0 0 auto;
  }
  .header_btn {
    padding: 0 15px 0 100px;
    margin: 0 0 0 118px;
  }

  @media(max-width: 1480px) {
    .header_nav {
      gap: 24px;
    }
  }

</style>

<script setup>
  import sprite from '@/sprite.svg';

</script>