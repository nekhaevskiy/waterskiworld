<?php get_header(); ?>
<main class="bg-white black-70 center f4 lh-copy measure-wide pb5 ph3 ph0-l pt4 sans-serif">
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <h1 class="b--light-gray bb f1 fw5 lh-solid mb4 mt0 pb4 serif" data-qa="pageHeading">
                <?php the_title(); ?>
            </h1>

            <div class="overflow-auto">
                <table class="center f5 w-100" cellspacing="0" data-qa="clubsTable">
                    <thead>
                        <tr>
                            <th class="fw6 pa3 tl">Страна, Регион</th>
                            <th class="fw6 pa3 tl">Контакты</th>
                        </tr>
                    </thead>
                    <tbody class="lh-copy">
                        <tr class="stripe-dark">
                            <td class="pa3">Беларусь, Витебская область</td>
                            <td class="pa3">
                                СДЮШОР им. Н.Л. Генова<br>
                                Катер<br>
                                г. Новополоцк, озеро Люхово<br>
                                Тел.: +375 (214) 53-41-67
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Беларусь, Минская область</td>
                            <td class="pa3">
                                РЦОП по воднолыжному спорту<br>
                                Катер<br>
                                Минский район, д. Волковичи 5В<br>
                                Сайт: <a class="dark-blue dim link" href="http://www.waterskicentr.by/">http://www.waterskicentr.by/</a>
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Россия, Москва</td>
                            <td class="pa3">
                                Воднолыжный клуб Натальи Румянцевой (Во-клуб)<br>
                                Электротяга<br>
                                р-н Строгино, Строгинское шоссе, Малый Строгинский залив (рядом с ул.Исаковского, д.37, стр.1 «Автозаправка BР»)<br>
                                Сайт: <a class="dark-blue dim link" href="http://www.vo-klub.ru/">http://vo-klub.ru/</a><br>
                                Тел.: +7 (915) 199-8928
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Россия, Московская область</td>
                            <td class="pa3">
                                Воднолыжный клуб «Вега»<br>
                                Катер<br>
                                Солнечногорский р-н, дер. Рузино<br>
                                Сайт: <a class="dark-blue dim link" href="http://vegawaterski.ru/">http://vegawaterski.ru/</a><br>
                                Тел.: +7 (925) 709-5822
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Россия, Санкт-Петербург</td>
                            <td class="pa3">
                                Воднолыжный клуб «Озерки»<br>
                                Катер<br>
                                Староорловская, 17а (рядом с СПС-14)<br>
                                Сайт: <a class="dark-blue dim link" href="http://wski.narod.ru/">http://wski.narod.ru/</a><br>
                                Тел.: +7 (812) 370 10 30
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Россия, Свердловская область</td>
                            <td class="pa3">Уральский воднолыжный центр<br>
                                Катер<br>
                                Екатеринбург, ул. Новостроя, 2Б<br>
                                Facebook: <a class="dark-blue dim link" href="https://www.facebook.com/UWSC-Ural-Water-Ski-Centre-201094549926172/">Уральский воднолыжный центр</a><br>
                                Тел.: 8 (904) 389-61-32</td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Россия, Тверская область</td>
                            <td class="pa3">
                                Яхт-клуб FordeWind Absolute Result Resort<br>
                                Катер<br>
                                Кимрский р-н., дер. Притыкино<br>
                                Сайт: <a class="dark-blue dim link" href="http://www.aresult.ru/fordewind">http://www.aresult.ru/fordewind</a><br>
                                Тел.: 8(903)228-62-11 (Сергей)
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Россия, Ярославская область</td>
                            <td class="pa3">
                                Воднолыжный клуб «Сатурн»<br>
                                Катер<br>
                                Рыбинский р-н, пос. Переборы<br>
                                Тел.: 8-915-992-60-63, 8-910-665-89-78
                            </td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Украина, Днепропетровская область</td>
                            <td class="pa3">
                                Воднолыжный клуб «Сентоза»<br>
                                Катер<br>
                                Днепропетровск, ул. Набережная Победы, 13<br>
                                Сайт: <a class="dark-blue dim link" href="http://sentosa-waterski.com/">http://sentosa-waterski.com/</a><br>
                                Тел.: +38(067)6374814
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="center mt3 w-100">
                <div class="aspect-ratio aspect-ratio--4x3">
                    <div class="aspect-ratio--object">
                        <iframe class="h-inherit w-100"
                            data-qa="clubsMap"
                            src="https://www.google.com/maps/d/embed?mid=1JfA01BZTvXjnCdKEVmP10B3HnQ4"
                        ></iframe>
                    </div>
                </div>
           </div>

           <p class="f5 mt3">
               Для того, чтобы добавить новый клуб или отредактировать информацию об уже имеющемся, <a class="dark-blue dim link" href="/kontaktyi">свяжитесь с нами</a>.
            </p>
        <?php endwhile; ?>

        <div class="mt4">
            <?php get_template_part('components/facebook-like-button'); ?>
        </div>
    <?php endif; ?>
</main>
<?php get_footer(); ?> 
