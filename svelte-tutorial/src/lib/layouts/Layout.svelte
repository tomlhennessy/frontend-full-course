<script>
    import { calculateTimeLeft, getLifePercentageLived } from "../../utils";
    import Form from "../Form.svelte";
    import Portal from "../Portal.svelte";

    const { headache } = $props();

    let showModal = $state(false)
    function handleToggleModal() {
        showModal = !showModal
    }

    let defaultBD = '1995-06-15'
    let defaultLE = 80
    let birthDate = $state(defaultBD)
    let lifeExpectancy = $state(defaultLE)
    let name = $state('Tom')

    let data = $state(calculateTimeLeft(defaultBD, defaultLE))
    let percentage = $derived(getLifePercentageLived(birthDate, lifeExpectancy))

    function handleUpdateData(n, b, e) {
        if (!n || !b || !e) {
            return
        }

        // save to local storage
        localStorage.setItem("formData", JSON.stringify({
            name: n,
            birthDate: b,
            lifeExpectancy: e
        }))

        name = n
        birthDate = b
        lifeExpectancy = parseInt(e)
        data = calculateTimeLeft(b, parseInt(e))
        showModal = false
    }

    function resetData() {
        name = 'Tom'
        birthDate = defaultBD
        lifeExpectancy = defaultLE
        data = calculateTimeLeft(defaultBD, defaultLE)
        localStorage.clear()
    }

    $effect(() => {
        const interval = setInterval(() => {
            data = calculateTimeLeft(birthDate, lifeExpectancy)
        }, 1000)
        return () => clearInterval(interval)
    })

    $effect(() => {
        if (!localStorage) { return }

        if (localStorage.getItem("formData")) {
            const { name: n, birthDate: b, lifeExpectancy: e } = JSON.parse(localStorage.getItem("formData"))
                name = n
                birthDate = b
                lifeExpectancy = parseInt(e)
                data = calculateTimeLeft(b, parseInt(e))
        }
    })
</script>

{#if showModal}
    <Portal handleCloseModal={handleToggleModal}>
        {#snippet form()}
            <Form {handleUpdateData} handleCloseModal={handleToggleModal} />
        {/snippet}
    </Portal>
{/if}

<header>
    <h1 class='text-medium text-gradient'>Unalive</h1>
</header>

<main>
    <!-- this is where the children will go -->
    {@render headache({data, birthDate, name, percentage, lifeExpectancy, handleToggleModal, resetData})}
</main>


<footer>
    <small>Created by</small>
    <a target="_blank" href="https://github.com/tomlhennessy/frontend-full-course">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFgeqmGk2KFlg/profile-displayphoto-shrink_400_400/B4DZSRP7VeHcAk-/0/1737603659935?e=1753315200&v=beta&t=z_wD5Aw6qDg5RcewSTSAarE59z9ILam0Wf_kiasbSQs" alt="profile" />
        <p>@tomlhennessy</p>
        <i class='fa-brands fa-github'></i>
    </a>
</footer>
