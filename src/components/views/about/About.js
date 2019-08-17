import React, { useState } from 'react';

import uuid from 'uuid';

// css
import './About.css';

const About = () => {
  const [abouts, setAbouts] = useState([
    {
      id: uuid(),
      text: `Hello people. My name is John, and I have been a resident of Derbyshire most of my life. Being an outdoor enthusiast the county offers a wide
    variety of activities to interest and involve individuals and groups of
    all ages and abilities.`
    },
    {
      id: uuid(),
      text: `As I enjoy the rugged and dramatic landscapes the wild places of
    Derbyshire have in abundance, I like to get out and learn about, maybe
    even attempt the things that interest me. The problem I have though is
    often it is difficult to get any information about activities and events
    as there isn't any organized and cohesive publications purporting
    specifically for Derbyshire.`
    },
    {
      id: uuid(),
      text: `A discussion one night with my good friend Duncan, or as he is
    affectionately known Drunken Duncan (I cast no aspersions brother.
    Honest!!!) So with Dunc, and his lovely lady Jules ,who both share my
    passion for the great outdoors and a love for nature and the multitude
    of activities that give them access to some of the most beautiful and
    spectacular places our county has to offer, we chatted about a site that
    was target specific for our county and the wide range of activities and
    interests that were available but perhaps not publicized sufficiently to
    gain a larger interest or participation. The joke was that if nobody was
    going to do it then we would. Lol.`
    },
    {
      id: uuid(),
      text: `So here we are. Six months later, doing what doesn't seem to be
    available anywhere we can find out there. A site that is designed to
    showcase some of the best things available to see and do in the great
    county of Derbyshire.`
    },
    {
      id: uuid(),
      text: `So if you like hiking in the wild places, are a climber, a hunter,
    mountain biker, artist, photographer, fisherman, as well as a gentle
    stroller around the footpaths with your dog. This site may be of
    interest to you.`
    },
    {
      id: uuid(),
      text: `Over the coming months we will be covering the things you like to do in
    the countryside of Derbyshire. Also regular articles on wildlife, food
    and drink, the environment,(focusing not just on the negative effects
    that we are seeing, but also looking for the people and the projects
    that are being done to help slow/stop the seeming impossible descent
    into global warming). Anyone who is involved with these kinds of
    projects who wishes to highlight their work we would like to hear from
    you. Also coming up will be articles on historical people and places
    that have been of interest and influence to the county, as well as
    conversations with every day people and the lives and interests they
    have.`
    },
    {
      id: uuid(),
      text: `Finally. We hope you find something of interest in our little site, and
    will drop in from time to time to see what we are doing. If you have any
    suggestions, or have a specific question, please feel free to contact
    us, and we will do our best to help. If you are active in a specific
    interest or pastime, and would like to share your experiences, we want
    to hear all about it.`
    },
    {
      id: uuid(),
      text: `So bye for now guys. Hope you enjoy this, and keep on getting out and
    about in the wild places we love and cherish.`
    },
    { id: uuid(), text: `John n Dunc.` }
  ]);

  return (
    <div className='flex-container'>
      {abouts.map(about => {
        return <div key={about.id}>{about.text}</div>;
      })}
    </div>
  );
};

export default About;
