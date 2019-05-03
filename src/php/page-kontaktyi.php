<?php
    //user posted variables
    $name = isset($_POST['message_name']) ? $_POST['message_name'] : '';
    $email = isset($_POST['message_email']) ? $_POST['message_email'] : '';
    $msg = isset($_POST['message_text']) ? $_POST['message_text'] : '';
    $human = isset($_POST['message_human']) ? $_POST['message_human'] : '';
    $submitted = isset($_POST['message_submitted']);
    
    //php mailer variables
    $to = get_option('admin_email');
    $subject = "Сообщение с сайта " . get_bloginfo('name') . ' от ' . $name;
    $headers = 'From: '. $email . "\r\n" . 'Reply-To: ' . $email . "\r\n";

    $nameError = false;
    $emailError = false;
    $msgError = false;
    $humanError = false;
    $validationError = false;
    $sent = false;

    if ($submitted) {
        $nameError = empty($name);
        $emailError = !filter_var($email, FILTER_VALIDATE_EMAIL);
        $msgError = empty($msg);
        $humanError = empty($human) || $human != 2;
        
        $validationError = $nameError || $emailError || $msgError || $humanError;

        if (!$validationError) {
            $sent = wp_mail($to, $subject, strip_tags($msg), $headers);
        }
    }
?>

<?php get_header(); ?>

<main class="bg-white black-70 center f4 lh-copy measure-wide pb5 pt4 sans-serif">
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt0 pb4 serif" data-qa="blockPageHeader">
                <?php the_title(); ?>
            </h1>

            <?php if (!$submitted) { ?>
                <div class="mb3" data-qa="blockPageContent">
                    <p>Связаться с командой WaterSkiWorld.ru можно написав нам в социальных сетях:</p>
                    <ul>
                        <li><a class="blue hover-light-blue link" href="https://www.facebook.com/waterskiworld/">Facebook</a></li>
                        <li><a class="blue hover-light-blue link" href="https://vk.com/waterskiworld">ВКонтакте</a></li>
                    </ul>
                    <p>или воспользовавшись формой ниже:</p>
                </div>
            <?php } ?>

            <?php if ($submitted && $validationError) { ?>
                <div class="b--light-pink ba bg-washed-red br2 dark-red mb3 pa3" data-qa="alertValidationError">
                    Пожалуйста, введите всю необходимую информацию
                </div>
            <?php } ?>
                
            <?php if ($submitted && !$validationError && !$sent) { ?>
                <div class="b--light-pink ba bg-washed-red br2 dark-red mb3 pa3" data-qa="alertFailure">
                    Сообщение не было отправлено. Пожалуйста, попробуйте еще раз
                </div>
            <?php } ?>
                
            <?php if ($sent) { ?>
                <div class="b--light-green ba bg-washed-green br2 dark-green mb3 pa3" data-qa="alertSuccess">
                    Спасибо! Ваше сообщение отправлено
                </div>
            <?php } ?>
            
            <?php if (!$sent) { ?>
                <form action="<?php the_permalink(); ?>" method="post" data-qa="blockForm">
                    <label class="b db f6 mb2" for="name">
                        Ваше имя
                        <span class="black-60 normal">(обязательное поле)</span>
                    </label>
                    <?php $nameBorderColor = $nameError ? 'b--dark-red' : 'b--black-20'; ?>
                    <input class="ba br2 db input-reset mb2 pa2 w-100 <?=$nameBorderColor;?>" 
                        data-qa="inputName"
                        id="name" 
                        name="message_name" 
                        required
                        type="text" 
                        value="<?php if (isset($_POST['message_name'])) echo esc_attr($_POST['message_name']); ?>" 
                    />
                    <?php if ($nameError) { ?>
                        <small class="dark-red db f6 mb2">
                            Пожалуйста, введите имя
                        </small>
                    <?php } ?>

                    <label class="b db f6 mb2 mt3" for="email">
                        Email для обратной связи
                        <span class="black-60 normal">(обязательное поле)</span>
                    </label>
                    <?php $emailBorderColor = $emailError ? 'b--dark-red' : 'b--black-20'; ?>
                    <input class="ba br2 db input-reset mb2 pa2 w-100 <?=$emailBorderColor;?>"
                        data-qa="inputEmail"
                        id="email" 
                        name="message_email" 
                        required
                        type="email" 
                        value="<?php if (isset($_POST['message_email'])) echo esc_attr($_POST['message_email']); ?>" 
                    />
                    <?php if ($emailError) { ?>
                        <small class="dark-red db f6 mb2">
                            Пожалуйста, введите корректный email
                        </small>
                    <?php } ?>

                    <label class="b db f6 mb2 mt3" for="text">
                        Ваше сообщение
                        <span class="black-60 normal">(обязательное поле)</span>
                    </label>
                    <?php $msgBorderColor = $msgError ? 'b--dark-red' : 'b--black-20'; ?>
                    <textarea class="ba br2 db input-reset mb2 pa2 w-100 <?=$msgBorderColor;?>"
                        data-qa="inputMsg"
                        id="text" 
                        name="message_text" 
                        required
                        rows="5"
                    ><?php if (isset($_POST['message_text'])) echo esc_textarea($_POST['message_text']); ?></textarea>
                    <?php if ($msgError) { ?>
                        <small class="dark-red db f6 mb2">
                            Пожалуйста, введите текст сообщения
                        </small>
                    <?php } ?>

                    <label class="b db f6 mb2 mt3" for="human">
                        Подтвердите, что вы не робот
                        <span class="black-60 normal">(обязательное поле)</span>
                    </label>
                    <?php $humanBorderColor = $humanError ? 'b--dark-red' : 'b--black-20'; ?>
                    <input class="ba br2 dib input-reset mb2 pa2 w3 <?=$humanBorderColor;?>" 
                        data-qa="inputHuman"
                        id="human" 
                        name="message_human" 
                        required
                        type="text" 
                        value="" 
                    />
                    + 3 = 5
                    <?php if ($humanError) { ?>
                        <small class="dark-red db f6 mb2" data-qa="textHumanError">
                            Пожалуйста, введите правильное слагаемое
                        </small>
                    <?php } ?>
                    
                    <input type="hidden" name="message_submitted" value="true">
                    <div class="mt3 tc">
                        <button class="bg-dark-blue br2 dib dim f4 link ph3 pv2 white" 
                            data-qa="btnSubmit"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            <?php } ?>
        <?php endwhile; ?>
    <?php endif; ?>
</main>
    
<?php get_footer(); ?>
