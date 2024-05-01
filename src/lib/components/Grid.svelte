<script>
    // your script goes here
</script>

<div class="grid-container">
    <div class="el">1</div>
    <div class="el">2</div>
    <div class="el">3</div>
    <div class="el">4</div>
    <div class="el">5</div>
    <div class="el">6</div>
    <div class="el">7</div>
    <div class="el">8</div>
    <div class="el">9</div>
    <div class="el">10</div>
    <div class="el">11</div>
    <div class="el">12</div>
</div>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(333px, 1fr));
        grid-gap: 32px;
        padding-top: var(--padding);
        margin-bottom: var(--margin);
    }
    .el {
        background: var(--c-main);
        padding: 20px;
        color: #fff;
        aspect-ratio: 1 / 1;
    }
</style>
