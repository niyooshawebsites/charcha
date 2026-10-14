import { Box, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

interface PageProps {
  name: string;
  url: string;
}

interface QuickLinksProps {
  pages: PageProps[];
}

const QuickLinks = ({ pages }: QuickLinksProps) => {
  return (
    <Box>
      <List>
        {pages.map((page, index) => (
          <Link href={page.url} key={index} className="hover:underline">
            <ListItem>
              <ListItemText>{page.name}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default QuickLinks;
