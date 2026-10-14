import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const TermsPage = () => {
  return (
    <Stack direction="column" spacing={3}>
      <Box>
        <Typography component="h3">Terms of Service</Typography>
        <Typography className="text-sm text-gray-500">
          Last updated: October 14, 2026
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Introduction</Typography>
        <Typography>
          Welcome to Fast Lane! These Terms of Service {"(Terms)"} govern your
          access to and use of our website, application, and related services.
        </Typography>

        <Typography>
          By accessing or using our platform, you agree to comply with these
          Terms. If you do not agree with any part of these Terms, please
          discontinue using our services.
        </Typography>

        <Typography>
          These Terms should be read together with our Privacy Policy and any
          applicable Community Guidelines.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">
          Eligibility and Account Registration
        </Typography>
        <Typography>
          To use our platform, you must meet the minimum-age requirements and be
          legally permitted to use the service under applicable law.
        </Typography>

        <Typography>When creating an account, you agree to:</Typography>

        <List>
          <ListItem>
            <ListItemText>
              Provide accurate and up-to-date registration information.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Keep your login credentials confidential.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Maintain the security of your account.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Notify us promptly if you suspect unauthorized access.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Use your account for lawful purposes.</ListItemText>
          </ListItem>
        </List>

        <Typography>
          You must not impersonate another person, create fraudulent accounts,
          or use misleading information to deceive other users.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Purpose of Our Platform</Typography>
        <Typography>
          Fast Lane is a knowledge-sharing platform that allows users to ask
          questions, share answers, publish content, participate in discussions,
          and discover information.
        </Typography>

        <Typography>
          Our goal is to create a community where people can exchange ideas,
          share experiences, and learn from different perspectives.
        </Typography>

        <Typography>
          We do not guarantee that all user-generated content is accurate,
          complete, reliable, or suitable for your needs. Information shared on
          our platform should not replace professional medical, legal,
          financial, or other expert advice where such guidance is necessary.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">User Content and Ownership</Typography>
        <Typography>
          You retain ownership of the content you create and submit to our
          platform, subject to any rights belonging to other parties.
        </Typography>

        <Typography>
          By publishing questions, answers, comments, images, or other content,
          you grant Fast Lane a non-exclusive, worldwide, royalty-free license
          to host, store, reproduce, display, distribute, and format that
          content as reasonably necessary to operate, maintain, promote, and
          improve the platform, subject to applicable law and your privacy
          choices.
        </Typography>

        <Typography>
          You confirm that you have the necessary rights to publish your content
          and that your submissions do not unlawfully violate another{" "}
          {"person's"}
          rights.
        </Typography>

        <Typography>
          You are responsible for the content you publish. We reserve the right
          to remove content that violates these Terms or applicable law.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Community Guidelines</Typography>
        <Typography>
          We want Fast Lane to be a respectful, safe, and constructive
          community. By using our platform, you agree not to:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>
              Post illegal, fraudulent, or deliberately misleading content.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Harass, threaten, bully, or intimidate other users.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Publish hateful or discriminatory content that violates our
              policies or applicable law.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Share another {"person's"} private or confidential information
              without authorization.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Upload content that infringes copyrights, trademarks, or other
              intellectual property rights.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Post spam, malicious links, or unauthorized promotional content.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Manipulate votes, rankings, engagement, or other platform
              features.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Impersonate individuals, organizations, or public figures.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Attempt to gain unauthorized access to accounts, systems, or data.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Distribute malware or use the platform for harmful or unlawful
              activities.
            </ListItemText>
          </ListItem>
        </List>

        <Typography>
          Violations may result in content removal, account restrictions,
          suspension, or termination, depending on the circumstances.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">
          Questions, Answers, and User Interactions
        </Typography>
        <Typography>
          Users are responsible for the questions, answers, comments, and other
          contributions they publish.
        </Typography>

        <Typography>
          You should evaluate information critically and verify important claims
          before relying on them. Opinions expressed by users do not necessarily
          represent the views of Fast Lane.
        </Typography>

        <Typography>
          We do not guarantee that every question will receive an answer or that
          every answer will be accurate, appropriate, or available indefinitely.
        </Typography>

        <Typography>
          You agree to interact respectfully with other users and to report
          content that you reasonably believe violates our guidelines.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Content Moderation and Reporting</Typography>
        <Typography>
          We may review reported content and user activity to enforce these
          Terms, protect our community, address abuse, and comply with
          applicable law.
        </Typography>

        <Typography>
          Where appropriate, we may remove, restrict, label, or disable access
          to content or accounts that violate our policies or create safety,
          security, or legal concerns.
        </Typography>

        <Typography>
          Where appropriate and legally permitted, we may provide notice of
          moderation decisions and an opportunity to appeal.
        </Typography>

        <Typography>
          Users may report inappropriate content or suspected violations using
          available reporting tools or by contacting our support team.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Intellectual Property Rights</Typography>
        <Typography>
          The {"platform's"} branding, logos, design, software, layout, and
          original materials may be protected by intellectual property laws.
        </Typography>

        <Typography>
          Except as permitted by law or expressly authorized by us, you may not
          copy, modify, distribute, sell, or commercially exploit protected
          platform materials without permission.
        </Typography>

        <Typography>
          Nothing in these Terms transfers ownership of your content to us.
          Third-party names, logos, and content remain the property of their
          respective owners.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Third-Party Links and Services</Typography>
        <Typography>
          Our platform may contain links to third-party websites, applications,
          or services for your convenience.
        </Typography>

        <Typography>
          We do not control and are not responsible for the content,
          availability, security, or privacy practices of third-party services.
        </Typography>

        <Typography>
          Your use of third-party services is at your own discretion and may be
          subject to their separate terms and privacy policies.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">
          Account Suspension and Termination
        </Typography>

        <Typography>
          You may stop using our platform at any time. You may also request
          account deletion through available account settings or by contacting
          us.
        </Typography>

        <Typography>
          We may suspend, restrict, or terminate an account if we reasonably
          believe that:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>
              You have materially violated these Terms or our Community
              Guidelines.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Your activity threatens platform security or other users.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Your account is being used for fraud, spam, or unlawful activity.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              We are required to take action by applicable law.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Continued access creates a significant operational or legal risk.
            </ListItemText>
          </ListItem>
        </List>

        <Typography>
          Where appropriate and legally permitted, we may provide notice and an
          opportunity to address or appeal the decision.
        </Typography>

        <Typography>
          Account deletion and content removal are subject to applicable law,
          legitimate retention requirements, and the handling of content already
          shared with others.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">
          Disclaimers and Limitation of Liability
        </Typography>
        <Typography>
          To the extent permitted by applicable law, our platform is provided on
          an {"as is"} and {"as available"} basis.
        </Typography>

        <Typography>
          We do not guarantee uninterrupted availability, error-free operation,
          or the accuracy and reliability of all user-generated content.
        </Typography>

        <Typography>
          To the extent permitted by law, Fast Lane will not be liable for
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the platform.
        </Typography>

        <Typography>
          Nothing in these Terms excludes or limits liability that cannot
          lawfully be excluded or limited, or any rights that cannot be waived
          under applicable consumer protection law.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">Changes to These Terms</Typography>
        <Typography>
          We may update these Terms from time to time to reflect changes in our
          services, operations, or legal obligations.
        </Typography>

        <Typography>
          When changes are made, we will update the {"Last Updated"} date on
          this page. For material changes, we will provide additional notice or
          obtain consent where required by law.
        </Typography>

        <Typography>
          We encourage you to review these Terms periodically to remain informed
          about the rules governing your use of our platform.
        </Typography>
      </Box>

      <Box>
        <Typography component="h4">
          Governing Law and Dispute Resolution
        </Typography>
        <Typography>
          These Terms are governed by the laws applicable to India, except where
          mandatory law provides otherwise.
        </Typography>

        <Typography>
          Any disputes arising from these Terms or your use of the platform will
          be handled by the courts or dispute-resolution mechanisms that have
          jurisdiction under applicable law.
        </Typography>

        <Typography>
          Nothing in this section limits any rights or remedies available to you
          under mandatory applicable law.
        </Typography>
      </Box>
    </Stack>
  );
};

export default TermsPage;
