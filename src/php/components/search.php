<form 
    action="<?php echo get_bloginfo('wpurl'); ?>" 
    class="flex-ns flex-nowrap-ns flex-row-ns items-stretch-ns" 
    method="get" 
    role="search"
>
    <input 
        class="b--black-20 ba black-70 br2 db f4 flex-grow-1-ns input-reset mr2 pa2 sans-serif w-100" 
        data-qa="inputSearch" 
        name="s" 
        placeholder="Поиск" 
        required 
        type="search" 
        value="<?php echo get_search_query(); ?>"
    />
    <button 
        class="b--dark-blue bg-white br2 bw1 center dark-blue db dim f4 flex-grow-0-ns flex-shrink-0-ns link mh0-ns mt0-ns mt1 pointer pv2 tc sans-serif w4" 
        data-qa="buttonSearch" 
        type="submit"
    >
        Найти
    </button>
</form>
