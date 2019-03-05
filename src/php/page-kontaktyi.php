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

<?php while ( have_posts() ) : the_post(); ?>
    <main class="center measure-wide f4 mb5 bg-white black-70 sans-serif">
        <h1 class="f1 mt2 mb4 pb4 lh-solid fw5 serif b--light-gray bb" data-qa="blockPageHeader">
            <?php the_title(); ?>
        </h1>

        <?php if (!$submitted) { ?>
            <div class="mb3 lh-copy" data-qa="blockPageContent">
                <p>Связаться с командой WaterSkiWorld.ru можно написав нам в социальных сетях:</p>
                <ul>
                    <li><a class="hover-light-blue blue link" href="https://www.facebook.com/waterskiworld/">Facebook</a></li>
                    <li><a class="hover-light-blue blue link" href="https://vk.com/waterskiworld">ВКонтакте</a></li>
                </ul>
                <p>или воспользовавшись формой ниже:</p>
            </div>
        <?php } ?>

        <?php if ($submitted && $validationError) { ?>
            <div class="mb3 pa3 bg-washed-red dark-red br2 b--light-pink ba" data-qa="alertValidationError">
                Пожалуйста, введите всю необходимую информацию
            </div>
        <?php } ?>
            
        <?php if ($submitted && !$validationError && !$sent) { ?>
            <div class="mb3 pa3 bg-washed-red dark-red br2 b--light-pink ba" data-qa="alertFailure">
                Сообщение не было отправлено. Пожалуйста, попробуйте еще раз
            </div>
        <?php } ?>
            
        <?php if ($sent) { ?>
            <div class="mb3 pa3 bg-washed-green dark-green br2 b--light-green ba" data-qa="alertSuccess">
                Спасибо! Ваше сообщение отправлено
            </div>
        <?php } ?>
        
        <?php if (!$sent) { ?>
            <form action="<?php the_permalink(); ?>" method="post" data-qa="blockForm">
                <label class="f6 mb2 b db" for="name">
                    Ваше имя
                    <span class="normal black-60">(обязательное поле)</span>
                </label>
                <?php $nameBorderColor = $nameError ? 'b--dark-red' : 'b--black-20'; ?>
                <input class="mb2 pa2 w-100 input-reset db br2 ba <?=$nameBorderColor;?>" 
                    data-qa="inputName"
                    id="name" 
                    name="message_name" 
                    required
                    type="text" 
                    value="<?php if (isset($_POST['message_name'])) echo esc_attr($_POST['message_name']); ?>" 
                />
                <?php if ($nameError) { ?>
                    <small class="f6 dark-red db mb2">
                        Пожалуйста, введите имя
                    </small>
                <?php } ?>

                <label class="f6 mt3 mb2 b db" for="email">
                    Email для обратной связи
                    <span class="normal black-60">(обязательное поле)</span>
                </label>
                <?php $emailBorderColor = $emailError ? 'b--dark-red' : 'b--black-20'; ?>
                <input class="mb2 pa2 w-100 input-reset db br2 ba <?=$emailBorderColor;?>"
                    data-qa="inputEmail"
                    id="email" 
                    name="message_email" 
                    required
                    type="email" 
                    value="<?php if (isset($_POST['message_email'])) echo esc_attr($_POST['message_email']); ?>" 
                />
                <?php if ($emailError) { ?>
                    <small class="f6 dark-red db mb2">
                        Пожалуйста, введите корректный email
                    </small>
                <?php } ?>

                <label class="f6 mt3 mb2 b db" for="text">
                    Ваше сообщение
                    <span class="normal black-60">(обязательное поле)</span>
                </label>
                <?php $msgBorderColor = $msgError ? 'b--dark-red' : 'b--black-20'; ?>
                <textarea class="mb2 pa2 w-100 input-reset db br2 ba <?=$msgBorderColor;?>"
                    data-qa="inputMsg"
                    id="text" 
                    name="message_text" 
                    required
                    rows="5"
                ><?php if (isset($_POST['message_text'])) echo esc_textarea($_POST['message_text']); ?></textarea>
                <?php if ($msgError) { ?>
                    <small class="f6 dark-red db mb2">
                        Пожалуйста, введите текст сообщения
                    </small>
                <?php } ?>

                <label class="f6 mt3 mb2 b db" for="human">
                    Подтвердите, что вы не робот
                    <span class="normal black-60">(обязательное поле)</span>
                </label>
                <?php $humanBorderColor = $humanError ? 'b--dark-red' : 'b--black-20'; ?>
                <input class="mb2 pa2 w3 input-reset dib br2 ba <?=$humanBorderColor;?>" 
                    data-qa="inputHuman"
                    id="human" 
                    name="message_human" 
                    required
                    type="text" 
                    value="" 
                />
                + 3 = 5
                <?php if ($humanError) { ?>
                    <small class="f6 dark-red db mb2" data-qa="textHumanError">
                        Пожалуйста, введите правильное слагаемое
                    </small>
                <?php } ?>
                
                <input type="hidden" name="message_submitted" value="true">
                <div class="tc mt3">
                    <button class="f5 ph3 pv2 bg-dark-blue white link dim dib br2" 
                        data-qa="btnSubmit"
                        type="submit"
                    >
                        Отправить
                    </button>
                </div>
            </form>
        <?php } ?>
    </main>
<?php endwhile; ?>
    
<?php get_footer(); ?>
