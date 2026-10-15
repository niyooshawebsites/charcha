import { Stack, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Stack
      direction="column"
      spacing={3}
      className="p-5 bg-blue-50 my-3 rounded-2xl"
    >
      <Stack>
        <Typography variant="h3" className="text-blue-500">
          About us
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Where Curiosity Meets Knowledge</Typography>
        <Typography>
          Welcome to {`${process.env.NEXT_PUBLIC_APP_NAME}`} — a community where
          curiosity inspires conversations, knowledge is shared, and everyone
          has something valuable to contribute.
        </Typography>

        <Typography>
          We believe that every question deserves a thoughtful answer and every
          person has a unique perspective worth sharing. Our platform brings
          people together to ask questions, exchange ideas, share experiences,
          and learn from one another.
        </Typography>

        <Typography>
          Whether {"you\'re"} looking for answers, sharing your expertise, or
          simply exploring something new,{" "}
          {`${process.env.NEXT_PUBLIC_APP_NAME}`} is a place where learning
          never stops.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Our Vision</Typography>

        <Typography>
          We envision a world where knowledge has no boundaries, curiosity is
          encouraged, and everyone has the opportunity to learn from others.
        </Typography>

        <Typography>
          We want to build a community where asking questions is celebrated,
          thoughtful discussions are valued, and sharing knowledge makes a
          difference.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Our Values</Typography>

        <Typography>
          Curiosity: We encourage people to ask questions, explore ideas, and
          never stop learning.
        </Typography>

        <Typography>
          Respect: We value different opinions, backgrounds, and experiences.
          Every meaningful conversation begins with mutual respect.
        </Typography>

        <Typography>
          Knowledge Sharing: We believe knowledge becomes more valuable when it
          is shared with others.
        </Typography>

        <Typography>
          Community: We grow stronger when we learn, contribute, and support one
          another.
        </Typography>

        <Typography>
          Quality Conversations: We encourage thoughtful answers, constructive
          discussions, and useful contributions.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Join Our Community</Typography>

        <Typography>
          Great ideas often begin with a simple question. Your next question
          could inspire a discussion, help someone solve a problem, or introduce
          you to a completely new perspective.
        </Typography>

        <Typography>
          Become part of {`${process.env.NEXT_PUBLIC_APP_NAME}`} today. Ask
          questions, share what you know, discover new ideas, and help build a
          community driven by curiosity and knowledge.
        </Typography>

        <Typography className="font-extrabold">
          Ask more. Learn more. Share more.
        </Typography>

        <Typography className="font-extrabold">
          Because every question is an opportunity to learn something new.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AboutPage;
