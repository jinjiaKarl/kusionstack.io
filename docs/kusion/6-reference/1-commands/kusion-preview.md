# kusion preview

Preview a series of resource changes within the stack

## Synopsis

Preview a series of resource changes within the stack.

 Create, update or delete resources according to the intent described in the stack. By default, Kusion will generate an execution preview and present it for your approval before taking any action.

```
kusion preview [flags]
```

## Examples

```
  # Preview with specified work directory
  kusion preview -w /path/to/workdir
  
  # Preview with specified arguments
  kusion preview -D name=test -D age=18
  
  # Preview with specifying spec file
  kusion preview --spec-file spec.yaml
  
  # Preview with ignored fields
  kusion preview --ignore-fields="metadata.generation,metadata.managedFields"
  
  # Preview with json format result
  kusion preview -o json
  
  # Preview without output style and color
  kusion preview --no-style=true
```

## Options

```
  -a, --all --detail            Automatically show all preview details, combined use with flag --detail
  -D, --argument stringArray    Specify arguments on the command line
      --backend string          The backend to use, supports 'local', 'oss' and 's3'.
  -d, --detail                  Automatically show preview details with interactive options (default true)
  -h, --help                    help for preview
      --ignore-fields strings   Ignore differences of target fields
      --no-style                no-style sets to RawOutput mode and disables all of styling
  -o, --output string           Specify the output format
      --spec-file string        Specify the spec file path as input, and the spec file must be located in the working directory or its subdirectories
  -w, --workdir string          The work directory to run Kusion CLI.
      --workspace string        The name of target workspace to operate in.
```

## Options inherited from parent commands

```
      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")
      --profile-output string   Name of the file to write the profile to (default "profile.pprof")
```

## SEE ALSO

* [kusion](index.md)	 - Kusion is the Platform Orchestrator of Internal Developer Platform

###### Auto generated by spf13/cobra on 21-Jan-2025
