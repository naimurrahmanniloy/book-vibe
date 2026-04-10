import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/ListedBooks/ListedReadList";
import ListedWishList from "../../components/ListedBooks/ListedWishList";

const Books = () => {
  const { storedBooks, wishListBooks } = useContext(BookContext);
  console.log(storedBooks, wishListBooks);
  return (
    <div className="container mx-auto mt-10 my-5">
      {/* Tab Button  */}

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
