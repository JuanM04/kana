<script lang="ts">
  import { Link } from "svelte-navigator";
</script>

<div>
  <header class="bg-cover bg-center h-80 flex items-center justify-center">
    <h1
      class="text-center inline font-extrabold tracking-tighter text-8xl text-white border-b-8 border-red-500 opacity-95"
    >Kana</h1>
  </header>
  <main class="max-w-md mx-auto text-justify">
    <p class="mt-4">こんにちは</p>
    <p class="mt-4">
      This is a simple website for people that want to learn Hiragana and
      Katakana. First, you can check both the <Link
        to="/hiragana-chart"
        class="link"
      >Hiragana chart</Link
      > and the <Link to="/katakana-chart" class="link">Katakana chart</Link>.
    </p>
    <p class="mt-4">
      You can practice with the <Link to="/trainer" class="link"
        >Kana Trainer</Link
      >.
    </p>
  </main>
</div>

<style>
  header {
    background-image: url("/japan.jpg");
  }
</style>
