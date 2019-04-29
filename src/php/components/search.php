<form 
    action="<?php echo get_bloginfo('wpurl'); ?>" 
    class="flex flex-nowrap flex-row items-stretch" 
    method="get" 
    role="search"
>
    <input 
        class="b--black-20 ba br2 flex-grow-1 input-reset mr2 pa2" 
        data-qa="inputSearch" 
        name="s" 
        placeholder="Поиск" 
        required 
        type="search" 
        value="<?php echo get_search_query(); ?>"
    />
    <button 
        class="bg-dark-blue br2 flex-grow-0 flex-shrink-0 dim f5 link ph3 pv2 white" 
        data-qa="buttonSearch" 
        type="submit"
    >
        Найти
    </button>
</form>
