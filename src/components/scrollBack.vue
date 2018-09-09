<template>
        <div> 
            <back-to-top bottom="5rem" right="5rem" visibleoffset="500" class="scroll">
                <font-awesome-icon icon="angle-up"/>
            </back-to-top>
        </div>
</template>

<style lang="scss" scoped>
    .scroll {
        width: 6rem;
        height: 6rem;
        background-color: #666;
        border-radius: 50%;
        position: fixed;
        right: 5rem;
        bottom: 5rem;
        transition: all .3s;
        & svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 4rem;
        }
        &:hover {
            background-color: #41B883;
        }
    }
    @media screen and (max-width: 576px) {
        .scroll {
            display: none;
        }
    }
</style>
