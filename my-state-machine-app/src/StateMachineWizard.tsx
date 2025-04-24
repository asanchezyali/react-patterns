import { useState } from 'react'

interface StateMachineConfig<StateType, StepNames extends string> {
  initialStep: StepNames;
  steps: {
    [key in StepNames]: {
      canAdvance: (state: StateType) => boolean;
      next?: StepNames;
      validationError?: string;
    }
  };
  views: {
    [key in StepNames]: React.ComponentType<{
      state: StateType;
      setState: React.Dispatch<React.SetStateAction<StateType>>;
      onNext: () => void;
      error?: string;
    }>
  }
}

type WizardState = {
  name: string;
  age: number;
}

type StepNames = "step1" | "step2" | "confirmation";

const StepIndicators = ({ currentStep }: { currentStep: StepNames }) => {
  const steps: StepNames[] = ["step1", "step2", "confirmation"];
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="steps">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`step-indicator ${
            index === currentIndex
              ? "active"
              : index < currentIndex
              ? "completed"
              : ""
          }`}
        />
      ))}
    </div>
  );
};

const stateMachineConfig: StateMachineConfig<WizardState, StepNames> = {
  initialStep: "step1",
  steps: {
    step1: {
      canAdvance: (state) => !!state.name && state.name.length >= 2,
      next: "step2",
      validationError: "Please enter a name with at least 2 characters"
    },
    step2: {
      canAdvance: (state) => !!state.age && state.age > 0 && state.age < 150,
      next: "confirmation",
      validationError: "Please enter a valid age between 1 and 150"
    },
    confirmation: {
      canAdvance: () => true
    }
  },
  views: {
    step1: ({ state, setState, onNext, error }) => (
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) => setState((prev) => ({...prev, name: e.target.value}))}
          placeholder="What's your name?"
        />
        {error && <div className="error-message">{error}</div>}
        <button onClick={onNext}>Continue</button>
      </div>
    ),
    step2: ({ state, setState, onNext, error }) => (
      <div>
        <input
          type="number"
          value={state.age || ''}
          onChange={(e) => setState((prev) => ({...prev, age: parseInt(e.target.value) || 0}))}
          placeholder="How old are you?"
        />
        {error && <div className="error-message">{error}</div>}
        <button onClick={onNext}>Continue</button>
      </div>
    ),
    confirmation: ({ state }) => (
      <div className="confirmation">
        <p>Nice to meet you, {state.name}! 👋</p>
        <p>You are {state.age} years young.</p>
      </div>
    )
  }
}

const getStepView = <T, V extends string>(
  config: StateMachineConfig<T, V>,
  stepName: V
): React.ComponentType<{ state: T; setState: React.Dispatch<React.SetStateAction<T>>; onNext: () => void; error?: string }> => config.views[stepName];

const StateMachineWizard = () => {
  const [wizardState, setWizardState] = useState<WizardState>({ name: "", age: 0});
  const [currentStep, setCurrentStep] = useState<StepNames>(stateMachineConfig.initialStep);
  const [error, setError] = useState<string | undefined>();

  const handleNext = () => {
    const stepConfig = stateMachineConfig.steps[currentStep];
    const canAdvance = stepConfig.canAdvance(wizardState);

    if (canAdvance && stepConfig.next) {
      setCurrentStep(stepConfig.next);
      setError(undefined);
    } else {
      setError(stepConfig.validationError || "Cannot advance to next step");
    }
  }

  const StepComponent = getStepView(stateMachineConfig, currentStep);

  return (
    <section>
      <h1>Hello there! ✨</h1>
      <StepIndicators currentStep={currentStep} />
      <StepComponent 
        state={wizardState} 
        setState={setWizardState} 
        onNext={handleNext}
        error={error}
      />
    </section>
  )
};

export default StateMachineWizard;
