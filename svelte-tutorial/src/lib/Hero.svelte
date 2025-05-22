<script>
    const { name, percentage, data, handleToggleModal } = $props();
</script>

<section id="hero">
    <h3 class='text-large'>
        {name}, you have {data["weeks"]} weeks left. Make them count 🫡
    </h3>
    <div class='btns-container'>
        <button onclick={handleToggleModal}>Not {name}?</button>
        <button class='link-button'>Copy link</button>
        <button class='link-button'>Reset data</button>
    </div>
    <div class='progress-bar'>
        <div>
            <div>
                <i class='fa-solid fa-baby'></i>
                <h6 class='bar-label'>Birth</h6>
            </div>
            <h6>{65}%</h6>
        </div>
        <div>
            <h6 class='bar-label'>Death</h6>
            <i class='fa-solid fa-skull'></i>
        </div>
    </div>
</section>
