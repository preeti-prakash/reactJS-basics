import "./App.css";

import Greet from "./components/Functional Component/Greet";

import Welcome from "./components/Class Component/Welcome";
import Message from "./components/Class Component/Message";

import Counter from "./components/State Updates/Counter";

import FunctionClick from "./components/Event Handler/FunctionClick";
import ClassClick from "./components/Event Handler/ClassClick";

import EventBind from "./components/Binding Event HANDLERS/EventBind";

import ParentComponent from "./components/Methods as Props/ParentComponent";

import UserGreeting from "./components/Conditional Rendering/UserGreeting";

import NameList from "./components/List Rendering/NameList";

import StyleSheet from "./components/CSS Styling/StyleSheet";
import Inline from "./components/CSS Styling/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

import Form from "./components/Form Handling/Form";

import LifecycleA from "./components/Component Lifecycle/LifecycleA";

import FragmentDemo from "./components/React Fragment/FragmentDemo";
import Table from "./components/React Fragment/Table";

import PureComp from "./components/Pure Component/PureComp";
import RegComp from "./components/Pure Component/RegComp";
import ParentComp from "./components/Pure Component/ParentComp";

import ParentMemo from "./components/React Memo/ParentMemo";

import RefsDemo from "./components/Refs/RefsDemo";
import FocusInput from "./components/Refs/FocusInput";
import FRParentInput from "./components/Refs/FRParentInput";

import PortalDemo from "./components/Portals/PortalDemo";

import Hero from "./components/ErrorBoundaries/Hero";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundary";

import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";

import HoverCounterTwo from "./components/Render Props/HoverCounterTwo";
import ClickCounterTwo from "./components/Render Props/ClickCounterTwo";
import User from "./components/Render Props/User";
import CounterProps from "./components/Render Props/CounterProps";
import ComponentC from "./components/Context/ComponentC";
import { UserProvider } from "./components/Context/userContext";

function App() {
  return (
    <div className="App">
      {/*  Context */}
      {/* <UserProvider value="Preeti">
        <ComponentC />
      </UserProvider> */}

      {/* Render Props */}
      {/* <CounterProps>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterProps>
      <CounterProps>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterProps> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Preeti" : "Guest")} /> */}

      {/*Higher Order Components */}
      {/* <ClickCounter name="Preeti" />
      <HoverCounter /> */}

      {/* Error Handling */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>{" "}
      </ErrorBoundary>
      <ErrorBoundary>
        {" "}
        <Hero heroName="Superman" />{" "}
      </ErrorBoundary>
      <ErrorBoundary>
        {" "}
        <Hero heroName="Joker" />{" "}
      </ErrorBoundary> */}

      {/* Portals */}
      {/* <PortalDemo /> */}

      {/* Forwarding Refs */}
      {/* <FRParentInput /> */}

      {/* Refs with class components*/}
      {/* <FocusInput /> */}

      {/* Refs */}
      {/* <RefsDemo /> */}

      {/* React Memo */}
      {/* <ParentMemo /> */}

      {/* Pure Component */}
      {/* <PureComp /> */}
      {/* <RegComp/> */}
      {/* <ParentComp /> */}

      {/* React Fragment*/}
      {/* <FragmentDemo/> */}
      {/* <Table /> */}

      {/* Component Lifecycle */}
      {/* <LifecycleA /> */}

      {/* Form Handling */}
      {/* <Form /> */}

      {/* CSS Styling */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}> Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}

      {/* List Rendering */}
      {/* <NameList /> */}

      {/* Conditional Rendering */}
      {/* <UserGreeting /> */}

      {/* Methods as Props */}
      {/* <ParentComponent /> */}

      {/* Binding Event Handler */}
      {/* <EventBind /> */}

      {/* Event HANDLER - onClick*/}
      {/* <FunctionClick />
      <ClassClick /> */}

      {/* State Updates - setState*/}
      {/* <Counter /> */}

      {/* Functional Component*/}
      {/* <Greet name="Preeti" lastname="Boddeti" /> */}

      {/* Class Component*/}
      {/* <Welcome name="Bhanu" lastname="Kandregula" /> */}

      {/* <Message name="Preeti" /> */}
    </div>
  );
}

export default App;
