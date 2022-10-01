// import { Prisma } from '@prisma/client';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';
// import { prisma } from "../../../db/client";
// import { colors } from '../../../utils/colors';

export const appRouter = trpc.router()
  .query('contact-info', {
    input: z
      .object({
        name: z.string().nullish(),
      })
      .nullish(),
    resolve() {
      return {
        name: "Adam Bertrand",
        subject: "Resume",
        jobTitle: "Sr Front End Developer",
        phone: "860-384-3921",
        email: "ajbertra91@gmail.com",
        socialMedia: [{
          url: "https://www.linkedin.com/in/adambertrand/",
          text: "linkedin"
        }]
      };
    },
  })

  .query('work-history', {
    input: z
      .object({
        name: z.string().nullish(),
      })
      .nullish(),
    resolve() {
      const getYear = (): number => {
        return new Date().getFullYear() - 2011;
      }
      return {
        TAB_ONE: 'Work History',
        TAB_TWO: 'Education',
        empowerDesc: ['Maintain the high performance of  the Prudential apps purchased by Empower, with a similar role as described below.'],
        prudentialDesc: [
          'Improved application Ease-of-Doing-Business score from 6.8 to 8.9 (out of 10)',
          'Modernized applications, adding responsive micro-frontend increasing performance from 8s to less than 2s',
          'Acted as technical resource to development staff in all phases of the development and implementation process. Had responsibility for application availability, health checks and business continuation with a great sense of urgency.',
          'Took leadership role in incident problem resolution. Decisions are guided by policies, procedures and business plan.'
        ],
        voyaDesc: [
          'Developed and maintained dynamic and reusable custom elements with  ES6+, hyperHtml, HTML5, CSS3. Architectured responsive SPAs in  Backbone, Aurelia, Angular frameworks, utilized Gulp, JSPM, NPM,  System.js, Node.js, Babel.js to code split and bundle JS modules to be delivered as needed to the UI for apps for the customer experience, apps like Voya Digital Account Opening, MyVoya, Voya Orange Money, Voya Digital Adviser, MyVoya SSO',
          'Decreased defects during development by building out e2e tests to be run in Jenkins.',
          'Spearheaded web accessibility upgrades to components and apps.',
          'Capitalized on AGILE processes to successfully collaborate in a high pressure, fast paced environment.',
        ],
        sportsTechDesc: [
          'Successfully designed, and coded web and hybrid fantasy sports applications for the NFL, NHL, NCAA, PGA TOUR, NASCAR, MLS, Breeders Cup.',
          'Utilized Angularjs, Ionic 1.x, JavaScript, HAML, SASS',
        ],
        ideaAgencyDesc: [
          'Lead web developer, responsible for coding, deploying and supporting CMS based sites for the agency and their clients.',
          'Designed and animated digital web ads for all platforms.',
        ],
        freelanceDesc: [
          'Built WordPress sites and maintained them for clients in the USA and an English website for SoonChunHyang University in South Korea.'
        ],
        schools: [
          {
            url: "https://www.sdstate.edu/",
            name: "South Dakota State University",
            yearsAttended: "2001 - 2004",
            degree: "BFA: Graphic Design",
          },
          {
            url: "https://www.augie.edu/",
            name: "Augustana University",
            yearsAttended: "1999 - 2001",
            degree: "Studied Religion",
          }
        ],
        introDesc: `${getYear()} years of front - end development experience, delivers projects on time, adapts quickly, enjoys learning new skills, delivers solutions for nationally recognized brands including the NFL, NHL, PGA TOUR, NASCAR, MLS, NCAA, Voya Financial, Prudential, Empower Retirement.`,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});