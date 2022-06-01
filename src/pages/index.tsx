import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/seo';

const Index = ({ location }: PageProps) => {
  return (
    <Layout location={location} pageTitle="Home">
      <SEO title="David Glymph" article={false} />
      <StaticImage src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large' alt='alt desc'></StaticImage>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel placeat corporis perspiciatis sapiente? Eligendi dignissimos aliquid et itaque sint voluptatem eveniet sit possimus deleniti consequatur corporis similique, quae dolores temporibus adipisci praesentium error blanditiis excepturi. Non commodi autem saepe culpa inventore quis esse nulla aspernatur earum doloribus aliquam officiis sequi deserunt at fuga magnam, vero quaerat provident assumenda suscipit harum ab, atque est! Perferendis, id quas accusamus unde nobis accusantium provident cupiditate. Minus nemo veritatis temporibus, perspiciatis assumenda porro magni vero harum illo aliquam dolorum autem iusto quasi aspernatur cum rem laboriosam consectetur omnis laudantium reprehenderit voluptas officia eos dolor. Perspiciatis illo suscipit, voluptate dolore accusantium nam quasi. Eos voluptatibus quia, vitae nihil consequuntur accusantium illo voluptate impedit perspiciatis tenetur ipsam accusamus, ducimus sit! Quos eaque vero impedit amet eveniet ab libero sed placeat ipsam porro, magni nam aliquam saepe blanditiis voluptates nesciunt. Consequatur ad dolore ducimus, temporibus incidunt voluptatem doloribus, reprehenderit provident accusamus eveniet nostrum, illum a maxime ipsa dolorem sint debitis. Necessitatibus eos reprehenderit perspiciatis quod, itaque deleniti est veniam laboriosam voluptas, explicabo voluptatum quam quidem tempore repudiandae autem adipisci enim cum, quae eum quasi quos eius neque? Hic ad est facere perspiciatis eum tempora. Cumque eos velit iure commodi eligendi tenetur molestiae minima architecto quis praesentium harum id reprehenderit dolorem nisi eius error, nesciunt nam reiciendis voluptatum voluptatibus? Corrupti delectus minima voluptates quasi. Aperiam quasi dolores unde sit omnis in esse iure vel blanditiis dicta? Consequuntur nobis ab velit placeat aliquid, odio magni voluptates enim harum. Placeat repudiandae sit doloremque delectus, aliquam officia eligendi natus assumenda fuga autem aspernatur. Obcaecati provident dignissimos minima fugiat nemo rerum iusto. Omnis in consequatur explicabo fugit labore. Inventore repudiandae vero sapiente aperiam necessitatibus vitae! Debitis possimus veritatis minima similique corporis, numquam ipsam molestiae asperiores incidunt, doloribus cupiditate tempore neque. Sapiente quam maiores voluptatem corporis doloremque facilis aspernatur repellat nulla, deleniti dicta in velit sequi nemo ratione quasi enim animi, quae nam quia natus pariatur reprehenderit ducimus similique! Ab nemo officia itaque ullam excepturi, recusandae laudantium? Asperiores cum nisi rem, sed, animi mollitia nihil, porro atque neque commodi inventore sint eligendi expedita. Tempore, molestias, facilis natus veritatis distinctio ullam neque accusamus nam hic fuga at, amet iste eos? Aliquam reiciendis quas rem necessitatibus veniam delectus dolor, magni ab. Nam inventore at veritatis debitis voluptas velit blanditiis obcaecati odit molestias culpa maiores cumque, excepturi, explicabo quia commodi corporis ratione reprehenderit fugit accusantium consectetur quo voluptate numquam. Consectetur dignissimos minus, unde eaque deserunt voluptatum illo pariatur voluptatibus omnis rerum id nemo temporibus eos soluta vel necessitatibus corporis iusto delectus, facilis fuga asperiores. Consequatur sit, tempore dolorem excepturi eius quia a voluptatibus non quam rem fugiat nostrum fugit quibusdam aliquid consectetur dolorum aut iste impedit repudiandae nihil sunt, velit est exercitationem qui. Nam beatae magni facere, maiores ad tempora ex, magnam illo consectetur nesciunt molestiae modi tempore quod atque sint deserunt quos? Delectus cumque accusantium tempora rem sint tenetur dolor illum quo blanditiis nostrum, dignissimos animi assumenda dolorem aut nemo. Quaerat vitae nesciunt aperiam?</p>
    </Layout>
  );
};

export default Index;