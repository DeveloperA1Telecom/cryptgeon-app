<button {...$$restProps} on:click><slot /></button>

<style>
	button {
                font-weight: 600;
                color: #10572A;
        background: none;
        border: none;
        font-size: 14px;
        border-top: 1px solid #10572A;
        border-bottom: 1px solid #10572A;
        height: 35px;
        width: 145px;
        padding: 0;
        cursor: pointer;
	}

	button:hover {
		border-color: var(--ui-clr-primary);
	}
</style>
