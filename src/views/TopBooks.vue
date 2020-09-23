<template>
  <div class="container page">
    <h1 class="page__title">Top books</h1>

    <div class="featured-book card">
      <div class="featured-book__label-recommended label label--primary">
        Recommended
      </div>

      <img
        class="featured-book__cover"
        src="../assets/images/01-becoming.jpg"
      />

      <div class="featured-book__info">
        <h2 class="featured-book__title">Becoming</h2>
        <div class="featured-book__author">Michelle Obama</div>

        <div class="featured-book__synopsis">
          <p>
            In a life filled with meaning and accomplishment, Michelle Obama has
            emerged as one of the most iconic and compelling women of our era.
            As First Lady of the United States of America—the first African
            American to serve in that role—she helped create the most welcoming
            and inclusive White House in history, while also establishing
            herself as a powerful advocate for women and girls in the U.S. and
            around the world, dramatically changing the ways that families
            pursue healthier and more active lives, and standing with her
            husband as he led America through some of its most harrowing
            moments. Along the way, she showed us a few dance moves, crushed
            Carpool Karaoke, and raised two down-to-earth daughters under an
            unforgiving media glare.
          </p>
          <p>
            In her memoir, a work of deep reflection and mesmerizing
            storytelling, Michelle Obama invites readers into her world,
            chronicling the experiences that have shaped her—from her childhood
            on the South Side of Chicago to her years as an executive balancing
            the demands of motherhood and work, to her time spent at the world’s
            most famous address. With unerring honesty and lively wit, she
            describes her triumphs and her disappointments, both public and
            private, telling her full story as she has lived it—in her own words
            and on her own terms.
          </p>
        </div>
      </div>
    </div>

    <div class="top-voted">
      <h2 class="top-voted__title">Top voted</h2>

      <div class="grid-x3 books-list">
        <div class="grid-x3__cell card book">
          <span class="book__position-badge">
            <span class="badge badge--primary">1</span>
          </span>

          <img class="book__cover" src="../assets/images/02-where.jpg" />

          <div class="book__info">
            <h3 class="book__title">Where the Crawdads Sing</h3>
            <div class="book__author">Delia Owens</div>

            <div class="book__synopsis">
              <p>
                For years, rumors of the "Marsh Girl" have haunted Barkley Cove,
                a quiet town on the North Carolina coast. So in late 1969, when
                handsome Chase Andrews is found dead, the locals immediately
                suspect Kya Clark, the so-called Marsh Girl. But Kya is not what
                they say. Sensitive and intelligent, she has survived for years
                alone in the marsh that she calls home, finding friends in the
                gulls and lessons in the sand. Then the time comes when she
                yearns to be touched and loved. When two young men from town
                become intrigued by her wild beauty, Kya opens herself to a new
                life--until the unthinkable happens.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-x3__cell card book">
          <span class="book__position-badge">
            <span class="badge badge--primary">2</span>
          </span>

          <img class="book__cover" src="../assets/images/03-girl.jpg" />

          <div class="book__info">
            <h3 class="book__title">
              Girl, Washbook__ Your Face: Stop Believing the Lies About Who You
              Are so You Can Become Who You Were Meant to Be
            </h3>
            <div class="book__author">Delia Owens</div>

            <div class="book__synopsis">
              <p>
                As the founder of the lifestyle website TheChicSite.com and CEO
                of her own media company, Rachel Hollis developed an immense
                online community by sharing tips for better living while
                fearlessly revealing the messiness of her own life. Now, in this
                challenging and inspiring new book, Rachel exposes the twenty
                lies and misconceptions that too often hold us back from living
                joyfully and productively, lies we’ve told ourselves so often we
                don’t even hear them anymore.
              </p>
            </div>
          </div>
        </div>

        <div class="grid-x3__cell card book">
          <span class="book__position-badge">
            <span class="badge badge--primary">3</span>
          </span>

          <img class="book__cover" src="../assets/images/04-educated.jpg" />

          <div class="book__info">
            <h3 class="book__title">Educated: A Memoir</h3>
            <div class="book__author">Tara Westover</div>

            <div class="book__synopsis">
              <p>
                Born to survivalists in the mountains of Idaho, Tara Westover
                was seventeen the first time she set foot in a classroom. Her
                family was so isolated from mainstream society that there was no
                one to ensure the children received an education, and no one to
                intervene when one of Tara’s older brothers became violent. When
                another brother got himself into college, Tara decided to try a
                new kind of life. Her quest for knowledge transformed her,
                taking her over oceans and across continents, to Harvard and to
                Cambridge University. Only then would she wonder if she’d
                traveled too far, if there was still a way home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/elements.scss";

.featured-book {
  display: flex;
  position: relative;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
}

.featured-book__label-recommended {
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 0.4rem;
}

.featured-book__cover {
  max-width: 40vw;
  margin: 0 auto;
  display: block;
  margin: 2rem 1.6rem;
  border-radius: $radius;
  box-shadow: 0 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
}

.featured-book__title {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2rem 0 0.4rem;
}

.featured-book__author {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.featured-book__synopsis {
  font-size: 1rem;
  margin: 2rem 1.6rem 2rem 0;
}

@media (max-width: 960px) {
  .featured-book {
    flex-direction: column;
  }

  .featured-book__cover {
    max-width: 40vw;
    margin: 0 auto;
  }

  .featured-book__synopsis {
    margin: 2rem 1.6rem;
  }

  .featured-book__title {
    margin: 2rem 1.6rem 0.4rem;
  }

  .featured-book__author {
    margin-bottom: 1rem;
    margin-left: 1.6rem;
  }
}

.book {
  padding: 0.1rem 0.8rem 0.8rem;
  border-radius: $radius;
  position: relative;
}

.book__position-badge {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
}

.book__cover {
  height: 12rem;
  display: block;
  margin: 1rem auto;
  border-radius: $radius;
  box-shadow: 0 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
}

.book__title {
  font-size: 1.125rem;
  font-weight: bold;
  margin: 1rem 0 0.4rem;
}

.book__author {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.book__synopsis {
  font-size: 0.925rem;
}

.top-voted {
  padding: 2rem 0 0;
}

.top-voted__title {
  font-size: 1.6rem;
  font-weight: $bold;
  margin-bottom: 1.6rem;
}
</style>
