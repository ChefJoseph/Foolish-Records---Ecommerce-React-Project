import { TwitterTimelineEmbed} from 'react-twitter-embed';

export default function TwitterFeed() {
    return (
    
  <div >
    <TwitterTimelineEmbed
      onLoad={function noRefCheck(){}}
      options={{
        height: 1000,
        width:1200
      }}
      screenName="Classical33couk"
      sourceType="profile"
    />
  </div>

        
            )
        
        }