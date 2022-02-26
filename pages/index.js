export default function Home({times}) {
  
    return (
      <>
        {
            times.map((time) => {
              return (
                <div key={time.date}>
                  <h1>{time.date}</h1>
                </div>
              );
            })
          }
      </>
    );

}

export async function getStaticProps() {
  const response = await fetch(
    "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
  );

  const data = await response.json();

  return {
    props: {
      times: data,
    },
  };
}
