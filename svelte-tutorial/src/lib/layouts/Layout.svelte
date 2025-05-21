<script>
    const { headache } = $props();

</script>

<header>
    <h1 class='text-medium text-gradient'>Unalive</h1>
</header>

<main>
    <!-- this is where the children will go -->
    {@render headache()}
</main>


<footer>
    <small>Created by</small>
    <a target="_blank" href="https://github.com/tomlhennessy/frontend-full-course">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFgeqmGk2KFlg/profile-displayphoto-shrink_400_400/B4DZSRP7VeHcAk-/0/1737603659935?e=1753315200&v=beta&t=z_wD5Aw6qDg5RcewSTSAarE59z9ILam0Wf_kiasbSQs" alt="profile" />
        <p>@tomlhennessy</p>
        <i class='fa-brands fa-github'></i>
    </a>
</footer>
