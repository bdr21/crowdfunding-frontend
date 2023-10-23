import { Component } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent {

  showItemDetails(item: any) {
    this.items.forEach((item: any) => { item.showDetails = false; });
    item.showDetails = !item.showDetails;
  }

  items : any[] = [
    {
      "image": "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80",
      "title": "Help 18 year old Lukas get off the streets ❤️",
      "creator": "Marie Pulver",
      "showDetails": false,
      "created": "June 8, 2020",
      "raised": "86972",
      "description": "I met Lukas in Minneapolis who shared his story with me how he'd become homeless when his mom passed away and his step dad threw him out of the house. He's been staying at friends houses as much as possible and in the homeless shelter. Most of his relatives are either dead, out of state or addicts and so he wants to stay clear of that path. Let's change Lukas life and raise enough money for him to never have to sleep outside or in a shelter again. No kid deserves to go through what he's been through. After getting to know Lukas and understand that he's not addicted to any drugs or alcohol I think he would be the perfect person for us all to gather together and help change his life! Let's get him his very own place and potential enough for him to have a car to get to work in!"
    },


    {
      "image": "https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80",
      "title": "Please Help Find Daniel!",
      "creator": "Oscar E. Rodriguez",
      "showDetails": false,
      "created": "June 8, 2020",
      "raised": "86972",
      "description": "Daniel has been missing since 2/25/21. He was last seen in the area of 12th and Vine in Cincinnati, OH. He was last seen wearing a black hoodie and black pants. He has a tattoo on his left arm of a cross with the word “Faith” and a tattoo on his right arm of a cross with the word “Hope”."
    },


    {
      "image": "https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80",
      "title": "Covering co-pay costs for cancer treatments",
      "creator": "Sarah Smith",
      "showDetails": false,
      "created": "June 8, 2020",
      "raised": "86972",
      "description": `My name is Sarah and I am a 32 year old mother of 2. I was diagnosed with breast cancer in October 2020. I have been undergoing chemotherapy since November 2020 and will be having surgery in April 2021. I will then have radiation and hormone therapy. I am unable to work due to my treatments and I am the sole provider for my family. I am asking for help to cover my co-pay costs for my treatments. I have already had to pay $1,000 out of pocket for my treatments and I am unable to afford the rest. I am asking for help so I can continue my treatments and get better. I have a 3 year old and a 7 year old that need me to get better. I am asking for help so I can continue to be a mother to my children. Thank you for your help.`
    },

    
    {
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80",
      "title": "Ryder Finkel's Journey",
      "creator": "James Finkel",
      "showDetails": false,
      "created": "June 8, 2020",
      "raised": "86972",
      "description": `On October 19th, 2023, our family received the news that our son Ryder Finkel has a rare form of childhood brain cancer. He has an inoperable tumor on his brain stem and we've been informed his time with us is limited.
      Ryder is a gift to all those around him. He has always been filled with nothing but love and positivity. We have always said from day one, "this kid just loves being alive".      
      The road ahead of us is unknown, but we do know the road will end. We are surrounded by the love of our family, friends and community and we will lean on all of you to travel this road together.      
      Many of you have asked and offered to help. In the comings days, weeks and months that we still have, we want to focus on nothing other then making the most of the moments. Any donation you are willing to give is helpful in ensuring we can do this without the added stress of worrying about money.      
      Whenever anyone tells Ryder "I love you", his immediate response is "I love you more".
      We love you all...and Ryder loves you more.
      Thank you for your donation.`
    },


    {
      "image" : "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80",
      "title": "A Treatment for Henry",
      "creator": "Henry's Heroes",
      "showDetails": false,
      "created": "June 8, 2020",
      "raised": "86972",
      "description": `Please scroll down to see our latest updates.

      What would you do if you were told when your baby was 9 weeks old that he had a rare, genetic, incurable disease and might never walk or talk?
      
      What would you do if you learned months later that the science to treat this disease is available, you just have to raise funds to make it happen?
      
      Answer: You would do absolutely anything in your power to develop a treatment to save his life.
      
      This is our reality, and that is exactly what we are doing. Our son, Henry, was diagnosed with a rare, one-in-a-million, severe, neurological disease called AHC. As with most rare orphan diseases, ours lacks funding from industry so we have to raise the funds on our own to develop a life-saving treatment for Henry. The cost is $3M to develop this gene therapy for Henry. We are in a race against time to get Henry treated before he suffers permanent brain damage as a result of this disease.
      
      
      About AHC:
      
      AHC causes life-threatening seizures, breathing trouble, random bouts of temporary paralysis, and global developmental delay. Any or all of these symptoms can hit at any time, having the potential to cause permanent brain damage (we are very lucky that despite Henry’s frequent symptoms, he has not yet suffered this irreversible damage). Henry has these life-threatening seizures and stops breathing nearly every day. AHC is a degenerative disease which means we risk losing parts of Henry that we can never get back and we are determined to stop this.
      
      AHC is like having 7 neurological conditions in 1:
      Paralysis like a stroke
      Seizures like epilepsy
      Low muscle tone like cerebral palsy
      Movement problems like Parkinson's
      Neurodegeneration like Alzheimer's
      Behavioral issues like ADHD
      Learning challenges like autism
      
      Please help us by sharing our story and donating to our fund so we can not only save our son's life, but also create a pathway for future AHC patients to receive treatment.`
    },


    {
      "image" : "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80",
      "title": "Let's help people in poor living conditions",
      "creator": "OsitaPopcorn Foundation",
      "showDetails": false,
      "created": "June 8, 2020",
      "raised": "86972",
      "description": `" I wanted to take a moment to shed some light on an important issue that needs our attention: the living conditions in slum areas. Many individuals and families in these communities face daily challenges, from inadequate housing to limited access to basic amenities.

      But here's the thing: we have the power to make a difference! ✨ By coming together as a community, we can support and uplift those living in slum areas. Here are a few ways you can get involved:
      
      1️⃣ Volunteer your time: Consider reaching out to local organizations that work directly with these communities. You can offer your skills, whether it's teaching classes, organizing workshops, or providing mentorship. Your presence and support can have a profound impact on their lives.
      
      2️⃣ Donate to local initiatives: Financial contributions can go a long way in providing essential resources and services to those in need. Whether it's food, clean water, education, or healthcare, your donations can help improve their quality of life.
      
      3️⃣ Raise awareness: Use your platform to spread awareness about the challenges faced by those in slum areas. Share stories, facts, and personal experiences to educate others and inspire action. Together, we can amplify their voices and advocate for change.
      
      Remember, every act of kindness, no matter how small, can create a ripple effect of positivity. Let's stand together and show our support for those living in slum areas. Together, we can make a real impact and create a brighter future for all.
      
      "Coming together to make a difference! Let's lend a helping hand to people who are facing a challenging situation. Every contribution, big or small, will go a long way in providing much-needed support for them. Together, we can bring hope and comfort to their lives. Please join us in this heartfelt campaign and spread the word to make a positive impact in our community. Together, we can make a difference
      
      
      GoFundMe created by OsitaPopcorn Foundation
      
      https://youtu.be/U6rx9llJGLs?si=4k4xNjjRAfkPn8Og`
    },


  ];

}