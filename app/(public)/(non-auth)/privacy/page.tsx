import { Stack, Typography, List, ListItem, ListItemText } from "@mui/material";

const PrivacyPage = () => {
  return (
    <Stack
      direction="column"
      spacing={3}
      className="p-5 bg-blue-50 my-3 rounded-2xl"
    >
      <Stack direction="column" spacing={2}>
        <Typography variant="h3" className="text-blue-500">
          Privacy Policy
        </Typography>

        <Typography className="text-sm text-gray-500">
          Last updated: October 14, 2026
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Introduction</Typography>
        <Typography>
          Welcome to {`${process.env.NEXT_PUBLIC_APP_NAME}`}. Your privacy is
          important to us, and we are committed to protecting your personal
          information.
        </Typography>

        <Typography>
          This Privacy Policy explains how we collect, use, store, and protect
          your information when you visit our website, create an account, ask
          questions, share answers, or interact with our community.
        </Typography>

        <Typography>
          By using {`${process.env.NEXT_PUBLIC_APP_NAME}`}, you agree to the
          practices described in this Privacy Policy. If you do not agree with
          this policy, please discontinue using our services.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Information We Collect</Typography>
        <Typography>
          We may collect the following types of information when you use our
          platform.
        </Typography>

        <Typography variant="h6">Personal Information</Typography>

        <Typography>
          When you create an account or use certain features, we may collect
          information such as:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>Name or username</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Email address</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Profile picture and biography</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Password, stored securely using appropriate hashing methods
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Other information you voluntarily provide in your profile
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h6">User-Generated Content</Typography>

        <Typography>
          We collect and store the content you submit to our platform,
          including:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>Questions and answers</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Comments and replies</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Posts and other contributions</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Likes, votes, bookmarks, and followed topics
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Messages or feedback you send us, if these features are available
            </ListItemText>
          </ListItem>
        </List>

        <Typography>
          Please remember that questions, answers, comments, and profile details
          you make public may be visible to other users.
        </Typography>

        <Typography variant="h6">Technical Information</Typography>

        <Typography>
          When you access our platform, we may collect certain technical
          information, including:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>IP address</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Browser type and version</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Device and operating system information</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Pages visited and interactions with our website
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Access dates, times, and diagnostic logs
            </ListItemText>
          </ListItem>
        </List>

        <Typography>
          We use this information to maintain, secure, and improve our services.
        </Typography>

        <Typography variant="h6">Cookies and Similar Technologies</Typography>

        <Typography>
          We may use cookies or similar technologies to maintain login sessions,
          remember preferences, understand website usage, and improve user
          experience.
        </Typography>

        <Typography>
          You can manage cookies through your browser settings. Disabling
          certain cookies may affect the functionality of some features.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">How We Use Your Information</Typography>
        <Typography>We may use the information we collect to:</Typography>

        <List>
          <ListItem>
            <ListItemText>Create and manage user accounts.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Provide question-and-answer and community features.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Display profiles, questions, answers, and other public
              contributions.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Pages visited and inPersonalize content and recommend relevant
              topics.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Notify users about replies, comments, and account activity.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Improve website performance and user experience.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Detect spam, fraud, abuse, and security threats.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Respond to support requests and user feedback.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Comply with applicable legal obligations.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Enforce our Terms of Service and community guidelines.
            </ListItemText>
          </ListItem>
        </List>

        <Typography>
          We will use personal information only for legitimate purposes
          consistent with this policy and applicable law.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Public Information and Content</Typography>
        <Typography>
          {`${process.env.NEXT_PUBLIC_APP_NAME}`} is a knowledge-sharing
          platform. Content you choose to publish publicly, including questions,
          answers, comments, and public profile information, may be viewed,
          copied, or shared by other people.
        </Typography>

        <Typography>
          Please avoid including sensitive personal information in public posts.
        </Typography>

        <Typography>
          Deleting a post or account may not immediately remove every copy of
          the content, such as copies retained in backups, quoted material,
          search engine caches, or content shared by other users. We will handle
          removal requests in accordance with applicable law and our retention
          practices.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">How We Share Your Information</Typography>
        <Typography>
          We may share information in the following circumstances:
        </Typography>

        <Typography variant="h6">Service Providers</Typography>
        <Typography>
          We may share relevant information with trusted service providers that
          help us operate our platform, such as hosting providers, email
          services, analytics providers, and security services.
        </Typography>

        <Typography>
          These providers may process information on our behalf under
          appropriate contractual or other safeguards.
        </Typography>

        <Typography variant="h6">Legal Requirements</Typography>
        <Typography>
          We may disclose information when required by applicable law,
          regulation, legal process, or a valid request from an authorized
          authority.
        </Typography>

        <Typography variant="h6">Safety and Security</Typography>
        <Typography>
          We may use or disclose relevant information when reasonably necessary
          to investigate abuse, prevent fraud, protect users, or safeguard our
          platform and legal rights.
        </Typography>

        <Typography variant="h6">Business Transfers</Typography>
        <Typography>
          If our platform is involved in a merger, acquisition, restructuring,
          or sale of assets, relevant information may be transferred as part of
          that transaction, subject to applicable privacy requirements.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Data Security</Typography>
        <Typography>
          We take reasonable technical and organizational measures to protect
          your personal information against unauthorized access, loss, misuse,
          alteration, or disclosure.
        </Typography>

        <Typography>
          However, no website or electronic storage system can guarantee
          complete security. You are responsible for keeping your account
          credentials confidential and notifying us if you suspect unauthorized
          access to your account.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Data Retention</Typography>
        <Typography>
          We retain personal information for as long as reasonably necessary to
          provide our services, maintain your account, resolve disputes, enforce
          our policies, meet legal obligations, and protect the security of our
          platform.
        </Typography>

        <Typography>
          When information is no longer required, we will delete it or anonymize
          it where appropriate, subject to applicable legal requirements and
          legitimate retention needs.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Your Privacy Rights and Choices</Typography>
        <Typography>
          Depending on your location and applicable law, you may have the right
          to:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>
              Access the personal information we hold about you.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Request correction of inaccurate information.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Request deletion of your personal information.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Request a copy of certain information in a portable format.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Withdraw consent where processing is based on consent.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Object to or request restrictions on certain processing
              activities.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Manage notification and communication preferences.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Raise a complaint with the relevant data protection authority.
            </ListItemText>
          </ListItem>
        </List>

        <Typography>
          To exercise any applicable rights, contact us using the details
          provided below. We may need to verify your identity before processing
          your request.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">{"Children's Privacy"}</Typography>
        <Typography>
          Our platform is not intended for children who are not permitted to use
          it under applicable laws or our minimum-age requirements.
        </Typography>

        <Typography>
          We do not knowingly collect personal information from children in
          violation of applicable law. If you believe a child has provided
          personal information improperly, please contact us so that we can
          review the situation and take appropriate action.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Third-Party Links and Services</Typography>
        <Typography>
          Our platform may contain links to third-party websites, services, or
          resources. We are not responsible for the privacy practices, security,
          or content of those third parties.
        </Typography>

        <Typography>
          We encourage you to review their privacy policies before sharing
          personal information with them.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">International Data Transfers</Typography>
        <Typography>
          Your information may be processed or stored in countries other than
          the country in which you live, depending on where our service
          providers operate.
        </Typography>

        <Typography>
          Where required by applicable law, we will take appropriate steps to
          ensure that international transfers of personal information are
          subject to suitable safeguards.
        </Typography>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Typography variant="h5">Changes to This Privacy Policy</Typography>
        <Typography>
          We may update this Privacy Policy from time to time to reflect changes
          in our services, technology, legal obligations, or privacy practices.
        </Typography>

        <Typography>
          When we make changes, we will update the {"Last Updated"} date on this
          page. Where required, we will provide additional notice or obtain
          consent before implementing significant changes.
        </Typography>

        <Typography>
          We encourage you to review this page periodically.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PrivacyPage;
